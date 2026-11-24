const Contact = require('../models/Contact.js');
const { validateContact, isLikelySpam } = require('../validation/contact');

const OK = { message: 'Contact form submitted successfully.' };

const submitContact = async (req, res) => {
  // Bots that fill in the hidden field get a normal reply, but nothing is saved.
  if (isLikelySpam(req.body)) return res.status(201).json(OK);

  const { valid, data, errors } = validateContact(req.body);
  if (!valid) {
    return res.status(400).json({ error: 'Please check the highlighted fields.', fields: errors });
  }

  try {
    // Only the validated fields are saved; anything else in the request is ignored.
    await Contact.create(data);
    return res.status(201).json(OK);
  } catch (error) {
    console.error('Failed to save contact submission:', error.message);
    return res.status(500).json({ error: 'Failed to submit contact form.' });
  }
};

module.exports = { submitContact };
