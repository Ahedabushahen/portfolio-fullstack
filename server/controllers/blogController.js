const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// Create a new blog post
const createBlog = async (req, res) => {
  const { title, content, published_at, author } = req.body;
  try {
    const newBlog = await prisma.blog.create({
      data: {
        title,
        content,
        published_at: new Date(published_at),
        author,
      },
    });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

// Update a blog post
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, published_at, author } = req.body;
  try {
    const updatedBlog = await prisma.blog.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        published_at: new Date(published_at),
        author,
      },
    });
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.blog.delete({
      where: { id: Number(id) },
    });
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
