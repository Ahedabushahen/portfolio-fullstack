const express = require('express');
const router = express.Router();
const {
  getAllEducation,
  createEducation,
  updateEducation,
  deleteEducation
} = require('../controllers/educationController');

router.get('/', getAllEducation);
router.post('/', createEducation);
router.put('/:id', updateEducation);
router.delete('/:id', deleteEducation);

module.exports = router;
