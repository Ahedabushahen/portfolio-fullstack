import React, { useEffect, useState } from 'react';
import { getAbout } from '../../services/aboutService';
import './About.css';

const About = () => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await getAbout();
        if (res && res.info) {
          setInfo(res.info);
        }
      } catch (err) {
        console.error('Error loading about:', err);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className="container about-page py-5">
      <h2 className="text-center fw-bold text-primary mb-4">About Me</h2>
      <div className="card shadow-lg border-0 p-4 about-card">
        <div className="row align-items-center g-4">
          <div className="col-md-4 text-center">
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="img-fluid rounded-circle border border-primary profile-img"
            />
          </div>
          <div className="col-md-8">
            <div className="lead text-muted" dangerouslySetInnerHTML={{ __html: info || 'Unable to load about information at the moment.' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
