const express = require('express');
const router = express.Router();
const { getAllExperience } = require('../controllers/experienceController');

router.get('/', getAllExperience);

module.exports = router;
