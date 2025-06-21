// src/pages/Education/Education.js
import React, { useEffect, useState } from 'react';
import './Education.css';
import { getEducation } from '../../services/educationService';

const Education = () => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await getEducation();
        setEducationList(response.data);
      } catch (error) {
        console.error('Failed to fetch education:', error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <div className="education-page container py-5">
      <h2 className="text-center fw-bold text-info mb-5">📘 My Education</h2>
      <div className="row g-4">
        {educationList.map((edu) => (
          <div key={edu.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 education-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{edu.institution}</h5>
                <p className="card-subtitle text-muted">{edu.degree}</p>
                <p className="card-text text-muted">{edu.description}</p>
                <small className="text-secondary mt-auto">
                  {edu.startYear} – {edu.endYear || 'Present'}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
