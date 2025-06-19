const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// Create new project
const createProject = async (req, res) => {
  const { title, description, tech_stack, github_url, live_url } = req.body;
  try {
    const newProject = await prisma.project.create({
      data: { title, description, tech_stack, github_url, live_url },
    });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

// Update project by ID
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, tech_stack, github_url, live_url } = req.body;
  try {
    const updatedProject = await prisma.project.update({
      where: { id: parseInt(id) },
      data: { title, description, tech_stack, github_url, live_url },
    });
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};

// Delete project by ID
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.project.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
};

module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
};
