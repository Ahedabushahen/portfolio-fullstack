import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <header className="header">
      <div className="logo">My Portfolio</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/media">Media</Link>
        <Link to="/contact">Contact</Link>
        {isAdmin && <Link to="/admin">Admin</Link>}
      </nav>
    </header>
  );
}

export default Header;
