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

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopbar />
        <div className="admin-content">
          <Routes>
            <Route path="/" element={<Navigate to="/admin/projects" />} />
            <Route path="about" element={<AboutManager />} /> {/* ✅ Add this */}
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
