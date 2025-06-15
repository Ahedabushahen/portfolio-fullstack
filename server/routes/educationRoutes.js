// routes/educationRoutes.js
const express = require('express');
const router = express.Router();
const { getAllEducation } = require('../controllers/educationController');

router.get('/', getAllEducation);

module.exports = router;
