// Netlify Function that serves the Express API at /api/* (see netlify.toml).
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const app = require('../app');

const handle = serverless(app);
let connecting = null;

// Warm function instances reuse one database connection. A failed attempt
// is forgotten so the next request tries again.
const connect = () => {
  if (!process.env.MONGO_URI) return Promise.reject(new Error('MONGO_URI is not set'));
  if (!connecting) {
    connecting = mongoose
      .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 8000 })
      .catch((error) => {
        connecting = null;
        throw error;
      });
  }
  return connecting;
};

exports.handler = async (event, context) => {
  // Return as soon as the response is ready, even with the connection open.
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connect();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    return {
      statusCode: 503,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ error: 'The contact service is unavailable right now. Please try again soon.' }),
    };
  }

  return handle(event, context);
};
