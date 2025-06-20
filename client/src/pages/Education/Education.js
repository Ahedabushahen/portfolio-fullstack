// src/pages/Education/Education.js
import React, { useEffect, useState } from 'react';
import { getEducation } from '../../services/educationService';
import './Education.css';

function Education() {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const response = await getEducation();
        setEducationList(response.data);
      } catch (error) {
        console.error('Error fetching education:', error);
      }
    }

    fetchEducation();
  }, []);

  return (
    <div className="education">
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        {educationList.map((edu) => (
          <div className="education-card" key={edu.id}>
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="duration">{edu.startDate} - {edu.endDate || 'Present'}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
