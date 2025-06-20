// src/pages/About/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I'm a passionate full-stack developer with experience in building responsive, dynamic web applications.
          I love creating elegant solutions, writing clean code, and continuously learning new technologies.
        </p>
        <div className="about-details">
          <ul>
            <li><strong>Name:</strong> Ahed Abu Shahen</li>
            <li><strong>Location:</strong> Israel</li>
            <li><strong>Occupation:</strong> Software Engineer @ BMC</li>
            <li><strong>Education:</strong> B.Sc in Computer Science</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
