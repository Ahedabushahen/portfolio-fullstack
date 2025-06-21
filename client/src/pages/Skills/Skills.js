// src/pages/Skills/Skills.js

import React, { useEffect, useState } from 'react';
import { getSkills } from '../../services/skillService';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await getSkills();
        setSkills(res.data);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="skills-container py-5">
      <h2 className="text-center text-success mb-5">My Skills</h2>

      <div className="row g-4 justify-content-center">
        {skills.map((skill) => (
          <div className="col-md-4 col-lg-3" key={skill.id}>
            <div className="card skill-card text-center shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text text-muted">{skill.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
