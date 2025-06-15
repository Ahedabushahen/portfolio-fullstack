const express = require('express');
const cors = require('cors');

const projectsRoutes = require('./routes/projectsRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const educationRoutes = require('./routes/educationRoutes');
const certificationsRoutes = require('./routes/certificationRoutes');
const contactRoutes = require('./routes/contactRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/certifications', certificationsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

// Default root
app.get('/', (req, res) => {
  res.send('Welcome to the Portfolio API');
});

module.exports = app;
