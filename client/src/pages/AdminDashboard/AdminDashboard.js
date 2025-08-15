
// AdminDashboard component for rendering the main admin dashboard layout and routing.
// Includes sidebar, topbar, and all admin management pages.
// src/pages/AdminDashboard/AdminDashboard.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AdminSidebar from './components/AdminSidebar';
import AdminTopbar from './components/AdminTopbar';

import ProjectManager from './components/ProjectManager';
import SkillManager from './components/SkillManager';
import EducationManager from './components/EducationManager';
import ExperienceManager from './components/ExperienceManager';
import CertificationManager from './components/CertificationManager';
import BlogManager from './components/BlogManager';
import ContactManager from './components/ContactManager';
import UserManager from './components/UserManager';
import AboutManager from './components/AboutManager'; // ✅ Import added

import './AdminDashboard.css';

// Renders the admin dashboard layout with sidebar, topbar, and content routes
const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopbar />
        <div className="admin-content">
          <Routes>
            {/* Redirect root to about page */}
            <Route path="/" element={<Navigate to="/admin/about" />} />
            {/* Admin management routes */}
            <Route path="about" element={<AboutManager />} />
            <Route path="projects" element={<ProjectManager />} />
            <Route path="skills" element={<SkillManager />} />
            <Route path="education" element={<EducationManager />} />
            <Route path="experience" element={<ExperienceManager />} />
            <Route path="certifications" element={<CertificationManager />} />
            <Route path="blogs" element={<BlogManager />} />
            <Route path="contact" element={<ContactManager />} />
            <Route path="users" element={<UserManager />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
