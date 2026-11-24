const mongoose = require('mongoose');

// Limits match validation/contact.js, so the database refuses anything
// that slips past the request checks.
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    course: { type: String, trim: true, maxlength: 120 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
