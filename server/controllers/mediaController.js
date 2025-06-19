const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all media
const getAllMedia = async (req, res) => {
  try {
    const media = await prisma.media.findMany();
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch media' });
  }
};

// Create new media
const createMedia = async (req, res) => {
  const { type, url, alt_text } = req.body;
  try {
    const newMedia = await prisma.media.create({
      data: { type, url, alt_text },
    });
    res.status(201).json(newMedia);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create media' });
  }
};

// Update media by ID
const updateMedia = async (req, res) => {
  const { id } = req.params;
  const { type, url, alt_text } = req.body;
  try {
    const updatedMedia = await prisma.media.update({
      where: { id: Number(id) },
      data: { type, url, alt_text },
    });
    res.json(updatedMedia);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update media' });
  }
};

// Delete media by ID
const deleteMedia = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.media.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Media deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete media' });
  }
};

module.exports = {
  getAllMedia,
  createMedia,
  updateMedia,
  deleteMedia,
};
