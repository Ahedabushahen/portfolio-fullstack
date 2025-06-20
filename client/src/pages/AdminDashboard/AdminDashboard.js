import React, { useState } from 'react';
import './AdminDashboard.css';
import AdminSidebar from './components/AdminSidebar';
import ProjectManager from './components/ProjectManager';
import SkillManager from './components/SkillManager';
import EducationManager from './components/EducationManager';
import CertificationManager from './components/CertificationManager';
import ExperienceManager from './components/ExperienceManager';
import MediaManager from './components/MediaManager';
import BlogManager from './components/BlogManager';
import ContactManager from './components/ContactManager';
import UserManager from './components/UserManager';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('projects');

  const renderContent = () => {
    switch (selectedTab) {
      case 'projects': return <ProjectManager />;
      case 'skills': return <SkillManager />;
      case 'education': return <EducationManager />;
      case 'certifications': return <CertificationManager />;
      case 'experience': return <ExperienceManager />;
      case 'media': return <MediaManager />;
      case 'blog': return <BlogManager />;
      case 'contacts': return <ContactManager />;
      case 'users': return <UserManager />;
      default: return <ProjectManager />;
    }
  };

  return (
    <div className="admin-dashboard d-flex">
      <AdminSidebar setSelectedTab={setSelectedTab} />
      <main className="p-4 flex-grow-1 bg-light">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;
