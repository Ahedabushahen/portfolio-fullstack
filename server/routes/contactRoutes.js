const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

router.get('/', getAllContacts);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
