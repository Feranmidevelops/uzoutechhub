const Contact = require('../models/Contact.js');

const submitContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: 'Contact form submitted successfully.' });
    } catch (error) {
        console.error('Failed to save contact submission:', error.message);
        res.status(500).json({ error: 'Failed to submit contact form.' });
    }
};

module.exports = { submitContact };
