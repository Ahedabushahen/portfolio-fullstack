// src/pages/Experience/Experience.js
import React, { useEffect, useState } from 'react';
import { getExperience } from '../../services/experienceService';
import './Experience.css';

function Experience() {
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    async function fetchExperience() {
      try {
        const response = await getExperience();
        setExperienceList(response.data);
      } catch (error) {
        console.error('Error fetching experience:', error);
      }
    }

    fetchExperience();
  }, []);

  return (
    <div className="experience">
      <h2 className="experience-title">Professional Experience</h2>
      <div className="experience-container">
        {experienceList.map((exp) => (
          <div className="experience-card" key={exp.id}>
            <h3>{exp.position}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.startDate} - {exp.endDate || 'Present'}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
