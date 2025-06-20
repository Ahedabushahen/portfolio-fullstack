// src/pages/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="card shadow-lg border-0 p-4">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="img-fluid rounded-circle border border-primary"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <p className="lead">
              Hello! I'm Ahed Abu Shahen, a passionate Full Stack Developer with strong expertise in modern web technologies, databases, and building responsive user interfaces. I love turning ideas into reality through elegant and performant code.
            </p>
            <p>
              I'm currently working at BMC Software and pursuing my Bachelor's in Computer Science. I believe in lifelong learning and constantly improve my skills to build scalable and efficient systems. I'm also preparing to start an MBA at Tel Aviv University next year.
            </p>
            <p>
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
