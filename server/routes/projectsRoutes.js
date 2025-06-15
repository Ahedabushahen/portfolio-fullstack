const express = require('express');
const router = express.Router();
const { getAllProjects, seedProjects } = require('../controllers/projectsController');

router.get('/', getAllProjects);
router.get('/seed', seedProjects);


module.exports = router;
