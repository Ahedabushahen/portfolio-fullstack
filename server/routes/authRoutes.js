const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

router.post('/admin-login', login);

module.exports = router;
