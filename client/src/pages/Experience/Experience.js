// src/pages/Experience/Experience.js

import React, { useEffect, useState } from 'react';
import { getExperience } from '../../services/experienceService';
import './Experience.css';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await getExperience();
        setExperience(res.data);
      } catch (error) {
        console.error('Failed to fetch experience:', error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Experience</h2>
      <div className="row">
        {experience.map((item) => (
          <div className="col-md-6 mb-4" key={item.id}>
            <div className="card shadow-sm experience-card">
              <div className="card-body">
                <h5 className="card-title">{item.position}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.company}</h6>
                <p className="card-text">{item.description}</p>
                <p className="card-dates text-secondary">
                  {item.startDate} – {item.endDate || 'Present'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
