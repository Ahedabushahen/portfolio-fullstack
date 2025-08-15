
// ProtectedRoute component for restricting access to authenticated admin users only.
import React from 'react';
import { Navigate } from 'react-router-dom';

// Checks for admin token in localStorage and renders children if authenticated, otherwise redirects to login.
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
