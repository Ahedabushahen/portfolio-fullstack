const express = require('express');
const router = express.Router();
const {
  getAllCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
} = require('../controllers/certificationController');

router.get('/', getAllCertifications);
router.post('/', createCertification);
router.put('/:id', updateCertification);
router.delete('/:id', deleteCertification);

module.exports = router;
