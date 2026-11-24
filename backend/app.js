const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const contactRoutes = require('./routes/contactRoutes');

// The Express app on its own, with no database connection or port.
// server.js runs it locally; the Netlify Function wraps the same app.
const app = express();

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

app.use(express.json());

app.use('/api/contact', contactRoutes);

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
