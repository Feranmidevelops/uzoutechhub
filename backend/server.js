// Load .env before anything reads process.env.
require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

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
