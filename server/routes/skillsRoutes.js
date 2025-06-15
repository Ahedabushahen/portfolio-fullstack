const express = require('express');
const router = express.Router();
const { getAllSkills } = require('../controllers/skillsController');

router.get('/', getAllSkills);

module.exports = router;
