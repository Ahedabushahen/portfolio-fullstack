// Inside client/src/components/Header.js
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">My Portfolio</div>
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
