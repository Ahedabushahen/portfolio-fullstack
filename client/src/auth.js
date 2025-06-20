// src/auth.js (simple version without context)
export const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.role === 'admin';
};
