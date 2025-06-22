const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const projectsRoutes = require('./routes/projectsRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const educationRoutes = require('./routes/educationRoutes');
const certificationsRoutes = require('./routes/certificationRoutes');
const contactRoutes = require('./routes/contactRoutes');
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const aboutRoutes = require('./routes/aboutRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/about', aboutRoutes);

// ✅ Serve React frontend from build (MUST come after API routes)
app.use(express.static(path.join(__dirname, '../client/build')));

// ✅ Catch-all for frontend routes (must come last!)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = app;
