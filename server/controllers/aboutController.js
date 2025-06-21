const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET the single about paragraph
const getAbout = async (req, res) => {
  try {
    const about = await prisma.about.findFirst();
    res.json(about);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch about info' });
  }
};

// CREATE if not exists
const createAbout = async (req, res) => {
  const { info } = req.body;
  try {
    const existing = await prisma.about.findFirst();
    if (existing) {
      return res.status(400).json({ error: 'About info already exists' });
    }

    const newAbout = await prisma.about.create({ data: { info } });
    res.status(201).json(newAbout);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create about info' });
  }
};

// UPDATE the only paragraph
const updateAbout = async (req, res) => {
  const { info } = req.body;
  try {
    const existing = await prisma.about.findFirst();

    if (!existing) {
      return res.status(404).json({ error: 'About info not found' });
    }

    const updated = await prisma.about.update({
      where: { id: existing.id },
      data: { info },
    });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update about info' });
  }
};

// Not used: deleteAbout (optional)
const deleteAbout = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.about.delete({ where: { id: Number(id) } });
    res.json({ message: 'About info deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete about info' });
  }
};

module.exports = {
  getAbout,
  createAbout,
  updateAbout,
  deleteAbout,
};
