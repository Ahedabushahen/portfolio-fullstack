import React from 'react';

const styles = {
  topbar: {
    height: '60px',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '0 25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #dee2e6',
    marginBottom: '15px',
  },
  left: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#343a40',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  welcome: {
    fontSize: '14px',
    color: '#495057',
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#dee2e6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#343a40',
    fontSize: '14px',
  },
  logoutBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

const AdminTopbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    window.location.href = '/';
  };

  return (
    <div style={styles.topbar}>
      <div style={styles.left}>Admin Dashboard</div>
      <div style={styles.right}>
        <div style={styles.welcome}>Welcome, Admin 👋</div>
        <div style={styles.avatar}>A</div>
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminTopbar;
