// src/pages/AdminDashboard/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  const sections = [
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Education', path: '/education' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Media', path: '/media' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Messages', path: '/contact' },
    { label: 'User Info', path: '/about' }
  ];

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p>Manage all sections of your portfolio from one place.</p>
      <div className="dashboard-grid">
        {sections.map((section) => (
          <div
            key={section.label}
            className="dashboard-card"
            onClick={() => navigate(section.path)}
          >
            <h3>{section.label}</h3>
            <span>Manage</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
