const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error('❌ Failed to get projects:', error);
    res.status(500).json({ error: 'Failed to retrieve projects.' });
  }
};

const seedProjects = async (req, res) => {
  try {
    await prisma.project.createMany({
      data: [
        {
          title: 'Portfolio Website',
          description: 'A fullstack personal portfolio using React and Node.js.',
          tech_stack: 'React, Node.js, Express, PostgreSQL',
          github_url: 'https://github.com/yourusername/portfolio',
          live_url: 'https://your-portfolio.com'
        },
        {
          title: 'E-Commerce Store',
          description: 'Online clothing store with cart, authentication and admin panel.',
          tech_stack: 'Next.js, MongoDB, TailwindCSS',
          github_url: 'https://github.com/yourusername/store',
          live_url: 'https://ecommerce-store.com'
        }
      ]
    });

    res.status(201).json({ message: 'Projects seeded successfully' });
  } catch (error) {
    console.error('❌ Failed to seed projects:', error);
    res.status(500).json({ error: 'Failed to seed projects' });
  }
};

module.exports = {
  getAllProjects,
  seedProjects
};
