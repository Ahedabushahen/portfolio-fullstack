import React, { useEffect, useState } from 'react';
import { getAbout } from '../../services/aboutService';
import './About.css';
import profileImg from '../../assets/profile.jpg'; 
import cvFile from '../../assets/Ahed Abu Shahen CV.pdf'; // Import CV file
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
              src={profileImg}
              alt="Profile"
              className="img-fluid rounded-circle border border-primary profile-img"
            />
            <div className="mt-3">
              <a
                href="https://www.linkedin.com/in/ahed-abu-shahen-8973ab2a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none me-3"
              >
                <FaLinkedin size={30} color="#0A66C2" />
              </a>
              <a
                href="https://github.com/Ahedabushahen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none me-3"
              >
                <FaGithub size={30} color="#333" />
              </a>
             
            </div>
             <a
                href={cvFile}
                download="Ahed_Abu_Shahen_CV.pdf"
                className="btn btn-primary mt-3 cv-download-btn"
              >
                Download CV
              </a>
          </div>
          <div className="col-md-8">
            <div className="lead text-muted" dangerouslySetInnerHTML={{ __html: info || 'Unable to load about information at the moment.' }} />
          </div>
        </div>
      </div>
      {/* CV Preview Section */}
      <div className="card shadow-sm border-0 mt-4 p-3 cv-preview-card">
        <h5 className="fw-bold text-primary mb-3">Preview My CV</h5>
        <div className="cv-iframe-wrapper">
          <iframe
            src={cvFile}
            title="Ahed Abu Shahen CV"
            className="cv-iframe"
            frameBorder="0"
            width="100%"
            height="500px"
            style={{ borderRadius: '12px', background: '#f8f9fa' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;