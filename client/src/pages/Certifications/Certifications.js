import React, { useEffect, useState } from 'react';
import { getCertifications } from '../../services/certificationService';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const { data } = await getCertifications();
        setCertifications(data);
      } catch (error) {
        console.error('Failed to fetch certifications', error);
      }
    };
    fetchCerts();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="certifications">
      <style>{`
        .certifications {
          background: #f0f4f8;
          padding: 3rem 1rem;
          border-radius: 12px;
          max-width: 1200px;
          margin: auto;
        }
        .certifications h2 {
          text-align: center;
          color: #34495e;
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .cert-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .cert-card {
          background: linear-gradient(135deg, #ffffff, #f9f9f9);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        .cert-card h3 {
          font-size: 1.25rem;
          color: #2c3e50;
          margin-bottom: 0.3rem;
        }
        .cert-card p {
          font-size: 0.95rem;
          color: #555;
          margin: 0.2rem 0;
        }
        .cert-card em {
          display: block;
          margin-top: 0.4rem;
          font-style: normal;
          color: #888;
          font-size: 0.85rem;
        }
        @media (max-width: 600px) {
          .certifications {
            padding: 2rem 1rem;
          }
        }
      `}</style>

      <h2>🎓 <span style={{ color: '#2979ff' }}>Certifications</span></h2>

      <div className="cert-list">
        {certifications.map(cert => (
          <div key={cert.id} className="cert-card">
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <em><strong>Issue Date:</strong> {formatDate(cert.issue_date)}</em>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
