import React from 'react';

const styles = {
  topbar: {
    height: '60px',
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '250px',
    borderBottom: '1px solid #dee2e6',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#343a40',
  },
  logoutBtn: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

const AdminTopbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/';
  };

  return (
    <div style={styles.topbar}>
      <div style={styles.logo}>Admin Dashboard</div>
      <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminTopbar;
