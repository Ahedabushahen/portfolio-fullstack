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
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 text-info">📘 My Education</h2>
      <div className="row">
        {educationList.map((edu) => (
          <div key={edu.id} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 border-info">
              <div className="card-body">
                <h5 className="card-title text-primary">{edu.institution}</h5>
                <p className="card-subtitle mb-2 text-muted">{edu.degree}</p>
                <p className="card-text">{edu.description}</p>
                <small className="text-secondary">
                  {edu.startYear} - {edu.endYear || 'Present'}
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
