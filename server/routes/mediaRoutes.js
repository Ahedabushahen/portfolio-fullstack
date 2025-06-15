// routes/mediaRoutes.js
const express = require('express');
const router = express.Router();
const { getAllMedia } = require('../controllers/mediaController');

router.get('/', getAllMedia);

module.exports = router;
