import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container mt-5 home-page">
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">I’m a passionate fullstack developer creating modern and dynamic web applications.</p>
        <a href="projects" className="btn btn-primary btn-lg mt-3">Explore Projects</a>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card border-0 shadow home-card">
            <div className="card-body text-center">
              <h5 className="card-title">Skills</h5>
              <p className="card-text">Discover the technologies and tools I use daily.</p>
              <a href="/skills" className="btn btn-outline-primary">View Skills</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow home-card">
            <div className="card-body text-center">
              <h5 className="card-title">Experience</h5>
              <p className="card-text">Read about my professional and project experiences.</p>
              <a href="/experience" className="btn btn-outline-primary">View Experience</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
