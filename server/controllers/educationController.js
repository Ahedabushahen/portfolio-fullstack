const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all education entries
const getAllEducation = async (req, res) => {
  try {
    const education = await prisma.education.findMany();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch education data' });
  }
};

// Create a new education entry
const createEducation = async (req, res) => {
  const { institution, degree, field_of_study, start_year, end_year } = req.body;
  try {
    const newEducation = await prisma.education.create({
      data: {
        institution,
        degree,
        field_of_study,
        start_year: Number(start_year),
        end_year: Number(end_year),
      },
    });
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create education entry' });
  }
};

// Update education entry by ID
const updateEducation = async (req, res) => {
  const { id } = req.params;
  const { institution, degree, field_of_study, start_year, end_year } = req.body;
  try {
    const updated = await prisma.education.update({
      where: { id: Number(id) },
      data: {
        institution,
        degree,
        field_of_study,
        start_year: Number(start_year),
        end_year: Number(end_year),
      },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update education entry' });
  }
};

// Delete education entry by ID
const deleteEducation = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.education.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Education entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete education entry' });
  }
};

module.exports = {
  getAllEducation,
  createEducation,
  updateEducation,
  deleteEducation,
};
