// controllers/mediaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllMedia = async (req, res) => {
  try {
    const media = await prisma.media.findMany();
    res.json(media);
  } catch (error) {
    console.error('❌ Failed to get media:', error);
    res.status(500).json({ error: 'Failed to retrieve media' });
  }
};

module.exports = {
  getAllMedia,
};
