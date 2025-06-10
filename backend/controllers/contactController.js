const Contact = require('../models/contact.js');

const submitContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: 'Contact form submitted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit contact form.' });
    }
};

module.exports = { submitContact };
