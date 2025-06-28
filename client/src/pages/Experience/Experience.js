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

  const formatDate = (dateString) => {
    return dateString ? dateString.slice(0, 10) : '';
  };

  const getEndDateLabel = (endDate) => {
    if (!endDate) return 'Present';

    const end = new Date(endDate);
    const today = new Date();
    return end > today ? 'Present' : formatDate(endDate);
  };

  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);

    let end;
    if (!endDate) {
      end = new Date();
    } else {
      const parsedEnd = new Date(endDate);
      const today = new Date();
      end = parsedEnd > today ? today : parsedEnd;
    }

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearsLabel = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthsLabel = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return `${yearsLabel}${yearsLabel && monthsLabel ? ' ' : ''}${monthsLabel}` || 'Less than a month';
  };

  return (
    <div className="experience-page container py-5">
      <h2 className="text-center text-primary fw-bold mb-5">Experience</h2>
      <div className="row g-4">
        {experience.map((item) => (
          <div className="col-md-6 col-lg-4" key={item.id}>
            <div className="card experience-card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.role}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.company}</h6>
                <p className="card-text text-muted">{item.description}</p>
                <p className="card-dates text-secondary mb-1">
                  {formatDate(item.start_date)} – {getEndDateLabel(item.end_date)}
                </p>
                <p className="card-duration text-secondary fst-italic">
                  Duration: {getDuration(item.start_date, item.end_date)}
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
