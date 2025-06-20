import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Certifications from './pages/Certifications/Certifications';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Media from './pages/Media/Media';

import AdminLogin from './pages/AdminLogin/Login';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import ProtectedRoute from './pages/AdminDashboard/utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />

          {/* Admin Auth */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Admin Dashboard with nested routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
