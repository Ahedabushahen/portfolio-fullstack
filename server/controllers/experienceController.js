const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllExperience = async (req, res) => {
  try {
    const experience = await prisma.experience.findMany();
    res.json(experience);
  } catch (error) {
    console.error('❌ Failed to get experience:', error);
    res.status(500).json({ error: 'Failed to retrieve experience' });
  }
};

module.exports = { getAllExperience };
