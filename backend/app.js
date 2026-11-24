const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit, ipKeyGenerator } = require('express-rate-limit');
const contactRoutes = require('./routes/contactRoutes');

// The Express app on its own, with no database connection or port.
// server.js runs it locally; the Netlify Function wraps the same app.
const app = express();

// Hosting platforms put one proxy in front of the app; trusting it lets
// the rate limiter see each visitor's real IP address.
app.set('trust proxy', 1);

// Standard security headers, and no "X-Powered-By: Express".
app.use(helmet());

// The site calls the API from its own origin (the Vite proxy in development,
// the same domain in production), so cross-origin requests are refused
// unless CORS_ORIGIN lists the sites allowed to call it, comma-separated.
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
if (allowedOrigins.length > 0) {
  app.use(cors({ origin: allowedOrigins, methods: ['POST'] }));
}

// A contact message is tiny; anything bigger is refused with a 413.
app.use(express.json({ limit: '10kb' }));

// Inside a Netlify Function there is no socket address, so req.ip is empty.
// Fall back to the visitor IP header Netlify's edge sets (it overwrites any
// value a visitor sends). ipKeyGenerator groups IPv6 addresses sensibly.
const visitorKey = (req) => ipKeyGenerator(req.ip || req.headers['x-nf-client-connection-ip'] || 'unknown');

// At most 10 messages per connection every 15 minutes, to slow down spam.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  keyGenerator: visitorKey,
  // Only real submissions count towards the limit.
  skip: (req) => req.method !== 'POST',
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many messages from this connection. Please try again in a few minutes.' },
});

const api = express.Router();
api.get('/health', (req, res) => res.json({ ok: true }));
api.use('/contact', contactLimiter, contactRoutes);

// Locally the API lives at /api. On Netlify, /api/* is rewritten to the
// function, which can see either path, so both are mounted.
app.use(['/api', '/.netlify/functions/api'], api);

// Anything else is a JSON 404 rather than Express's HTML page.
app.use((req, res) => res.status(404).json({ error: 'Not found.' }));

// Errors (malformed JSON, a body that is too large, anything unexpected)
// come back as short JSON messages, never as HTML pages with stack traces.
app.use((err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  if (status >= 500) console.error('Unhandled error:', err.message);

  let message = 'Something went wrong.';
  if (status === 413) message = 'The request body is too large.';
  else if (status < 500) message = 'The request could not be read.';

  res.status(status).json({ error: message });
});

module.exports = app;
