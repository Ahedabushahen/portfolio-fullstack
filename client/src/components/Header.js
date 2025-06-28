// src/components/Header.js

import { Link } from 'react-router-dom';
import './Header.css';
import profileImg from '../assets/profile.jpg';

function Header() {
  return (
    <header className="main-header">
      <Link to="/" className="logo-wrapper">
        <img src={profileImg} alt="Profile" className="logo" />
        <span className="logo-hi">
          Hi ,how are you? <span className="wave">👋</span>
        </span>
      </Link>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link className="admin-link" to="/admin-login">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;