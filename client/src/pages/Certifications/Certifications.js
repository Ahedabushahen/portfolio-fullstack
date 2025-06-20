// src/pages/Certifications/Certifications.js
import React, { useEffect, useState } from 'react';
import { getCertifications } from '../../services/certificationService';
import './Certifications.css';

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    async function fetchCertifications() {
      try {
        const response = await getCertifications();
        setCertifications(response.data);
      } catch (error) {
        console.error('Error fetching certifications:', error);
      }
    }

    fetchCertifications();
  }, []);

  return (
    <div className="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map(cert => (
          <div className="certification-card" key={cert.id}>
            <h3>{cert.name}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            <p className="description">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
