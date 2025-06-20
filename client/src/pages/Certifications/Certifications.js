// src/pages/Certifications/Certifications.js

import React, { useEffect, useState } from 'react';
import { getCertifications } from '../../services/certificationService';
import './Certifications.css';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const res = await getCertifications();
        setCertifications(res.data);
      } catch (error) {
        console.error('Failed to fetch certifications:', error);
      }
    };

    fetchCertifications();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Certifications</h2>
      <div className="row">
        {certifications.map((cert) => (
          <div className="col-md-6 mb-4" key={cert.id}>
            <div className="card certification-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{cert.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{cert.issuer}</h6>
                <p className="card-text">{cert.description}</p>
                <p className="card-dates text-secondary">
                  Issued: {cert.issueDate}
                  {cert.expiryDate && ` — Expires: ${cert.expiryDate}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
