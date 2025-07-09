import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="container py-5 home-page">
      <div className="text-center mb-5">
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
    </div>
  );
};

export default Home;
