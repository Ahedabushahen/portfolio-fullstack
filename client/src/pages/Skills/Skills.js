// src/pages/Skills/Skills.js
import React, { useEffect, useState } from 'react';
import { getSkills } from '../../services/skillService';
import './Skills.css';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await getSkills();
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    }

    fetchSkills();
  }, []);

  return (
    <div className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <h3>{skill.name}</h3>
            <p>Level: {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
