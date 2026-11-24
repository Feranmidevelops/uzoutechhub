

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
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

// MongoDB connection
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not set. Copy .env.example to .env and fill it in.');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, (error) => {
    // Express 5 passes listen errors (like a port already in use) here
    // instead of throwing, so handle them explicitly.
    if (error) {
      console.error(`Could not start the server on port ${PORT}:`, error.message);
      process.exit(1);
    }
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error.message);
  // Exit so the process manager or host restarts us instead of
  // leaving a process running with no server listening.
  process.exit(1);
});