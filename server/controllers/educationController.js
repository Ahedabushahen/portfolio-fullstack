// controllers/educationController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllEducation = async (req, res) => {
  try {
    const education = await prisma.education.findMany();
    res.json(education);
  } catch (error) {
    console.error('❌ Failed to get education:', error);
    res.status(500).json({ error: 'Failed to retrieve education' });
  }
};

module.exports = {
  getAllEducation,
};
