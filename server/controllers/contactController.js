const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET: all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contact messages' });
  }
};

// POST: new contact
const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
        reply: 'Not replied yet', // default reply
      },
    });
    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create contact message' });
  }
};

// PUT: update contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, subject, message, reply } = req.body;

  try {
    const updatedContact = await prisma.contact.update({
      where: { id: Number(id) },
      data: { name, email, subject, message, reply },
    });
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact message' });
  }
};

// DELETE
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.contact.delete({ where: { id: Number(id) } });
    res.json({ message: 'Contact deleted' });
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
