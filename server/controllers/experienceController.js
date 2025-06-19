const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all experiences
const getAllExperiences = async (req, res) => {
  try {
    const experiences = await prisma.experience.findMany();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experiences' });
  }
};

// Create a new experience
const createExperience = async (req, res) => {
  const { company, role, start_date, end_date, description } = req.body;
  try {
    const newExperience = await prisma.experience.create({
      data: {
        company,
        role,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        description,
      },
    });
    res.status(201).json(newExperience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create experience' });
  }
};

// Update an experience by ID
const updateExperience = async (req, res) => {
  const { id } = req.params;
  const { company, role, start_date, end_date, description } = req.body;
  try {
    const updatedExperience = await prisma.experience.update({
      where: { id: Number(id) },
      data: {
        company,
        role,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        description,
      },
    });
    res.json(updatedExperience);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update experience' });
  }
};

// Delete an experience by ID
const deleteExperience = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.experience.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete experience' });
  }
};

module.exports = {
  getAllExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
