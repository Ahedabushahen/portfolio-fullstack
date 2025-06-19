const express = require('express');
const router = express.Router();
const {
  getAllMedia,
  createMedia,
  updateMedia,
  deleteMedia,
} = require('../controllers/mediaController');

router.get('/', getAllMedia);
router.post('/', createMedia);
router.put('/:id', updateMedia);
router.delete('/:id', deleteMedia);

module.exports = router;
