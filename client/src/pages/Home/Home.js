import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container py-5 home-page">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to My Portfolio</h1>
        <p className="lead text-muted">I’m a passionate fullstack developer creating modern and dynamic web applications.</p>
        <a href="/projects" className="btn btn-primary btn-lg mt-3 shadow-sm">Explore Projects</a>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 border-0 shadow-lg home-card">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h5 className="card-title fw-semibold text-primary">Skills</h5>
              <p className="card-text text-muted">Discover the technologies and tools I use daily.</p>
              <a href="/skills" className="btn btn-outline-primary mt-auto">View Skills</a>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-4">
          <div className="card h-100 border-0 shadow-lg home-card">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h5 className="card-title fw-semibold text-primary">Experience</h5>
              <p className="card-text text-muted">Read about my professional and project experiences.</p>
              <a href="/experience" className="btn btn-outline-primary mt-auto">View Experience</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
