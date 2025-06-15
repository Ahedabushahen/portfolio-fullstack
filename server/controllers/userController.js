const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error('❌ Failed to get users:', error.message);
    res.status(500).json({ error: 'Failed to retrieve users.' });
  }
};

// Add a new user (based on contact info, optional)
const createUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('❌ Failed to create user:', error.message);
    res.status(500).json({ error: 'Failed to create user.' });
  }
};

module.exports = { getAllUsers, createUser };
