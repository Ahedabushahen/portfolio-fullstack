// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { getAllContacts } = require('../controllers/contactController');

router.get('/', getAllContacts);

module.exports = router;
