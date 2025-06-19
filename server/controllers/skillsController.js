// controllers/skillsController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET all skills
const getAllSkills = async (req, res) => {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get skills' });
  }
};

// POST create new skill
const createSkill = async (req, res) => {
  try {
    const { name, level } = req.body;
    const newSkill = await prisma.skill.create({
      data: { name, level }
    });
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create skill' });
  }
};

// PUT update skill
const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level } = req.body;
    const updatedSkill = await prisma.skill.update({
      where: { id: parseInt(id) },
      data: { name, level }
    });
    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update skill' });
  }
};

// DELETE a skill
const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.skill.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete skill' });
  }
};

module.exports = {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill
};
