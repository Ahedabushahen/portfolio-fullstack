
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCertifications = async (req, res) => {
  try {
    const certifications = await prisma.certification.findMany();
    res.json(certifications);
  } catch (error) {
    console.error('❌ Failed to get certifications:', error);
    res.status(500).json({ error: 'Failed to retrieve certifications' });
  }
};

module.exports = {
  getAllCertifications,
};
