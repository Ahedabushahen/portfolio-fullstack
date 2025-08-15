// AdminSidebar component for displaying the admin dashboard sidebar navigation.
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Kanban, Award, Book, Pen, ChatLeftText, People, BoxArrowRight
} from 'react-bootstrap-icons';


// Renders the admin dashboard sidebar with navigation links
const AdminSidebar = () => {
  // Handle admin logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin-login';
  };

  return (
    <div className="admin-sidebar">
      {/* Sidebar title and navigation links */}
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-links">
        <li><Link to="/admin/about"><Book className="icon" /> About</Link></li>
        <li><Link to="/admin/projects"><Kanban className="icon" /> Projects</Link></li>
        <li><Link to="/admin/skills"><Award className="icon" /> Skills</Link></li>
        <li><Link to="/admin/experience"><Book className="icon" /> Experience</Link></li>
        <li><Link to="/admin/education"><Book className="icon" /> Education</Link></li>
        <li><Link to="/admin/certifications"><Award className="icon" /> Certifications</Link></li>
        <li><Link to="/admin/blogs"><Pen className="icon" /> Blogs</Link></li>
        <li><Link to="/admin/contact"><ChatLeftText className="icon" /> Messages</Link></li>
        <li><Link to="/admin/users"><People className="icon" /> Users</Link></li>
        {/* Logout link */}
        <li onClick={handleLogout} style={{ color: 'red', fontSize: '21px', cursor: 'pointer' }}>
          <BoxArrowRight className="icon" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;

// Embedded CSS for the sidebar is injected into the document head
/* ===== Embedded CSS ===== */
const style = document.createElement('style');
style.innerHTML = `
.admin-sidebar {
  width: 250px;
  height: 100vh;
  background-color: #212529;
  color: white;
  padding: 30px 20px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 0 8px rgba(0,0,0,0.2);
  overflow-y: auto;
}

.sidebar-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 35px;
  text-align: center;
  color: #f8f9fa;
  border-bottom: 1px solid #495057;
  padding-bottom: 10px;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-links li {
  margin-bottom: 16px;
}

.sidebar-links li a,
.sidebar-links li {
  color: #dee2e6;
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 6px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}

.sidebar-links li:hover,
.sidebar-links li a:hover {
  background-color: #495057;
}

.icon {
  margin-right: 12px;
  font-size: 18px;
}
`;
document.head.appendChild(style);
