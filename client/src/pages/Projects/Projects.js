// src/pages/Projects/Projects.js

import React, { useEffect, useState } from 'react';
import { getProjects } from '../../services/projectService';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-container py-5">
      <h2 className="text-center text-primary mb-5">My Projects</h2>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="card project-card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-auto"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
