import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '20px',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    display: 'block',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: 'background-color 0.2s ease-in-out',
  },
  navLinkHover: {
    backgroundColor: '#495057',
  }
};

const AdminSidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Admin Panel</h2>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/admin/projects" style={styles.navLink}>Projects</Link></li>
        <li style={styles.navItem}><Link to="/admin/skills" style={styles.navLink}>Skills</Link></li>
        <li style={styles.navItem}><Link to="/admin/experience" style={styles.navLink}>Experience</Link></li>
        <li style={styles.navItem}><Link to="/admin/education" style={styles.navLink}>Education</Link></li>
        <li style={styles.navItem}><Link to="/admin/certifications" style={styles.navLink}>Certifications</Link></li>
        <li style={styles.navItem}><Link to="/admin/media" style={styles.navLink}>Media</Link></li>
        <li style={styles.navItem}><Link to="/admin/blogs" style={styles.navLink}>Blogs</Link></li>
        <li style={styles.navItem}><Link to="/admin/contact" style={styles.navLink}>Messages</Link></li>
        <li style={styles.navItem}><Link to="/admin/users" style={styles.navLink}>Users</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
