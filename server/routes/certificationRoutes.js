// routes/certificationRoutes.js
const express = require('express');
const router = express.Router();
const { getAllCertifications } = require('../controllers/certificationController');

router.get('/', getAllCertifications);

module.exports = router;
