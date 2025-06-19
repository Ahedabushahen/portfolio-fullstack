const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all contact messages
const getAllContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact messages' });
  }
};

// Create a new contact message
const createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create contact message' });
  }
};

// Update contact message by ID
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, message } = req.body;
  try {
    const updatedContact = await prisma.contact.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        message,
      },
    });
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact message' });
  }
};

// Delete contact message by ID
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.contact.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact message' });
  }
};

module.exports = {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
};
