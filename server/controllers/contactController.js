// controllers/contactController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.json(contacts);
  } catch (error) {
    console.error('❌ Failed to get contacts:', error);
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
};

module.exports = {
  getAllContacts,
};
