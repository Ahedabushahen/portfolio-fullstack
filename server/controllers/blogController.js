const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

const createBlog = async (req, res) => {
  const { title, author,content } = req.body;
  try {
    const newBlog = await prisma.blog.create({
      data: { title, author,content},
    });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const updatedBlog = await prisma.blog.update({
      where: { id: Number(id) },
      data: { title, content, author },
    });
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.blog.delete({ where: { id: Number(id) } });
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
