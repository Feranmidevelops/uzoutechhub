



const express = require ('express');
const {submitContact} = require ('../controllers/contactController.js');

const router = express.Router();

// POST route to submit contact form
router.post('/', submitContact);
// GET route to fetch all contacts (optional, can be used for admin purposes)
module.exports = router;