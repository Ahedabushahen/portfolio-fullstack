// server/controllers/userController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// CREATE user (only if not exists)
const createUser = async (req, res) => {
  const { fullName, email } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (!existingUser) {
      const newUser = await prisma.user.create({
        data: {
          fullName,
          email,
        }
      });
      return res.status(201).json(newUser);
    } else {
      return res.status(200).json({ message: 'User already exists' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// UPDATE user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email } = req.body;

  try {
    const updated = await prisma.user.update({
      where: { id: Number(id) },
      data: { fullName, email }
    });
    res.json(updated);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// DELETE user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: Number(id) }
    });
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
