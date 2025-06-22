// src/pages/AdminDashboard/components/AdminTopbar.js
import React from 'react';

// Inline CSS
const styles = {
  topbar: {
    height: '60px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #dee2e6',
    padding: '0 25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#0d6efd',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  welcome: {
    fontSize: '0.9rem',
    color: '#6c757d',
  },
  avatar: {
    width: '36px',
    height: '36px',
    backgroundColor: '#dee2e6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#343a40',
    fontSize: '14px',
  },
  logoutBtn: {
    padding: '6px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
};

const AdminTopbar = () => {

  return (
    <div style={styles.topbar}>
      <div style={styles.title}>Admin Dashboard</div>
      <div style={styles.right}>
        <span style={styles.welcome}>Welcome, Admin 👋</span>
        <div style={styles.avatar}>A</div>
 
      </div>
    </div>
  );
};

export default AdminTopbar;
