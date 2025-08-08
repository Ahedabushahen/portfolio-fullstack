import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/profile.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container py-5 home-page">
      <div className="text-center mb-5">
        <img
          src={profileImg}
          alt="Profile"
          className="home-profile-img mb-3"
        />
        <div className="home-social-icons mb-3">
          <a
            href="https://www.linkedin.com/in/ahed-abu-shahen-8973ab2a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <FaLinkedin size={32} color="#0A66C2" />
          </a>
          <a
            href="https://github.com/Ahedabushahen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} color="#333" />
          </a>
        </div>
        
        <h1 className="display-4 fw-bold text-primary">Welcome to My Portfolio</h1>
        <p className="lead text-muted">I’m a passionate fullstack developer creating modern and dynamic web applications.</p>
        <Link to="/projects" className="btn btn-primary btn-lg">Explore Projects</Link>
        
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 border-0 shadow-lg home-card">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h5 className="card-title fw-semibold text-primary">Skills</h5>
              <p className="card-text text-muted">Discover the technologies and tools I use daily.</p>
              <Link to="/skills" className="btn btn-primary btn-lg">View Skills</Link>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 border-0 shadow-lg home-card">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h5 className="card-title fw-semibold text-primary">Experience</h5>
              <p className="card-text text-muted">Read about my professional experiences.</p>
              <Link to="/experience" className="btn btn-primary btn-lg">View Experience</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-contact-btn-wrapper mb-4">
          <Link to="/contact" className="home-contact-btn">
            <span className="front">Contact Me</span>
            
          </Link>
        </div>
    </div>
  );
};

export default Home;
