// controllers/blogController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.json(blogs);
  } catch (error) {
    console.error('❌ Failed to get blogs:', error);
    res.status(500).json({ error: 'Failed to retrieve blogs' });
  }
};

module.exports = {
  getAllBlogs,
};
