const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all certifications
const getAllCertifications = async (req, res) => {
  try {
    const certifications = await prisma.certification.findMany();
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certifications' });
  }
};

// Create a new certification
const createCertification = async (req, res) => {
  const { title, issuer, issue_date,  credential_url } = req.body;
  try {
    const newCert = await prisma.certification.create({
      data: {
        title,
        issuer,
        issue_date: new Date(issue_date),
        credential_url,
      },
    });
    res.status(201).json(newCert);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create certification' });
  }
};

// Update certification
const updateCertification = async (req, res) => {
  const { id } = req.params;
  const { title, issuer, issue_date,  credential_url } = req.body;
  try {
    const updatedCert = await prisma.certification.update({
      where: { id: Number(id) },
      data: {
        title,
        issuer,
        issue_date: new Date(issue_date),
        credential_url,
      },
    });
    res.json(updatedCert);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update certification' });
  }
};

// Delete certification
const deleteCertification = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.certification.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Certification deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete certification' });
  }
};

module.exports = {
  getAllCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
};
