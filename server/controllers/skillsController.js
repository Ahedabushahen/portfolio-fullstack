const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET all skills
const getAllSkills = async (req, res) => {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (error) {
    console.error('❌ Failed to get skills:', error);
    res.status(500).json({ error: 'Failed to retrieve skills.' });
  }
};

module.exports = {
  getAllSkills
};
