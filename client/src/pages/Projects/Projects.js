
// Projects component for displaying a list of projects with filters and modal details.
// Fetches project data from the API and renders project cards and modals.
import React, { useEffect, useState } from 'react';
import { getProjects } from '../../services/projectService';
import './Projects.css';

const projectExtraData = {
  
  'Portfolio Website': {
    main_image: require('../../assets/portfolio-homepage.png'),
    youtube_url: '',
    detailed_description: 'A personal portfolio website built with React and Node.js, showcasing projects, skills, and contact information.',
    technologies: ['React', 'Node.js', 'Bootstrap'],
    images: [
      { url: require('../../assets/contact-page.png'), caption: 'contact Page' }
    ],
    documents: [],
    github_url: 'https://github.com/Ahedabushahen/portfolio-fullstack',
    live_url: 'https://github.com/Ahedabushahen/portfolio-fullstack',
    createdAt: '2023-11-10T08:00:00Z',
    updatedAt: '2024-12-20T14:45:00Z'
  },
  'Shopping Cart': {
    main_image: require('../../assets/Shopping-cart-homepage.png'),
    youtube_url: '',
    detailed_description: 'A simple shopping web app built with TypeScript for managing products and cart features.',
    technologies: ['TypeScript', 'React', 'Redux'],
    images: [
      { url: require('../../assets/cart.png'), caption: 'Cart Page' }
    ],
    documents: [],
    github_url: 'https://github.com/Ahedabushahen/Shopping-Cart',
    live_url: '',
    createdAt: '2024-03-05T10:00:00Z',
    updatedAt: '2025-06-01T11:00:00Z'
  },
  'Doctor Appointment Management System': {
    main_image: require('../../assets/home-page.jpg'),
    youtube_url: '',
    detailed_description: 'A PHP system for managing doctor appointments with an admin dashboard, patient management, and notifications.',
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    images: [
      { url: require('../../assets/doctor-managment-project.jpg'), caption: 'Admin Dashboard' }
    ],
    documents: [],
    github_url: 'https://github.com/Ahedabushahen/Doctor-Appointment-Management-System',
    live_url: '',
    createdAt: '2023-09-15T09:00:00Z',
    updatedAt: '2024-10-10T13:00:00Z'
  }
};

const departments = [
  'Software Engineering',
  'Graphic Design',
  'Electrical',
  'Communications'
];
const studyPaths = [
  'single-major',
  'double-major',
  'engineering',
  "bachelor's degree",
  "master's degree"
];
const allTechnologies = [
  'React', 'Python', 'Unity', 'IoT', 'Machine Learning', 'Node.js', 'MongoDB', 'Stripe', 'Bootstrap', 'Redux', 'PHP', 'MySQL'
];

// Add demo like/dislike counts to each project (frontend only)
const demoLikes = {
  'E-commerce Platform': 12,
  'Portfolio Website': 8,
  'Shopping Cart': 5,
  'Doctor Appointment Management System': 3
};
const demoDislikes = {
  'E-commerce Platform': 2,
  'Portfolio Website': 1,
  'Shopping Cart': 0,
  'Doctor Appointment Management System': 1
};

// Modal component for displaying detailed project information
const ProjectModal = ({ project, onClose, onLike, onDislike, likeCount, dislikeCount }) => {
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  if (!project) return null;
  const extra = projectExtraData[project.title] || {};

  // Social share URLs
  const shareUrl = extra.live_url || extra.github_url || window.location.href;
  const shareText = encodeURIComponent(`Check out this project: ${project.title}`);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{project.title}</h2>
        {extra.main_image && (
          <img src={extra.main_image} alt={project.title} className="modal-main-image" />
        )}
        {extra.youtube_url && (
          <div className="modal-video-wrapper">
            <iframe
              width="100%"
              height="315"
              src={extra.youtube_url.replace('watch?v=', 'embed/')}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <p className="modal-description">{extra.detailed_description || project.description}</p>
        <div className="modal-meta mb-3">
          <strong>Project ID:</strong> {project.id}<br />
          <strong>Created At:</strong> {extra.createdAt ? new Date(extra.createdAt).toLocaleDateString() : 'N/A'}<br />
          <strong>Last Updated:</strong> {extra.updatedAt ? new Date(extra.updatedAt).toLocaleDateString() : 'N/A'}<br />
        </div>
        {extra.technologies && extra.technologies.length > 0 && (
          <div className="modal-tech-list">
            <h5>Technologies Used:</h5>
            <ul>
              {extra.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        {extra.images && extra.images.length > 0 && (
          <div className="modal-images">
            <h5>Screenshots:</h5>
            {extra.images.map((img, idx) => (
              <div key={idx} className="modal-image-block">
                <img src={img.url} alt={img.caption || `Screenshot ${idx + 1}`} />
                {img.caption && <p>{img.caption}</p>}
              </div>
            ))}
          </div>
        )}
        {extra.documents && extra.documents.length > 0 && (
          <div className="modal-documents">
            <h5>Related Documents:</h5>
            <ul>
              {extra.documents.map((doc, idx) => (
                <li key={idx}>
                  <a href={doc.url} download target="_blank" rel="noopener noreferrer">{doc.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="modal-links">
          {extra.github_url && (
            <a href={extra.github_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark me-2">GitHub</a>
          )}
          {extra.live_url && (
            <a href={extra.live_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Site</a>
          )}
        </div>
        <div className="modal-rating mb-3">
          <span className="me-2">Rate this project:</span>
          {[1,2,3,4,5].map(star => (
            <span
              key={star}
              className={`star${rating >= star ? ' filled' : ''}`}
              onClick={() => setRating(star)}
              style={{ cursor: 'pointer', fontSize: '1.5rem', color: rating >= star ? '#ffc107' : '#bbb' }}
              title={`Rate ${star} star${star > 1 ? 's' : ''}`}
            >★</span>
          ))}
          <button
            className={`like-btn ms-3${liked ? ' active' : ''}`}
            onClick={() => {
              if (!liked) { onLike(project.title); }
              else { onLike(project.title, -1); }
              setLiked(!liked); if (disliked) setDisliked(false);
            }}
            title="Like"
          >👍 {likeCount}</button>
          <button
            className={`dislike-btn ms-2${disliked ? ' active' : ''}`}
            onClick={() => {
              if (!disliked) { onDislike(project.title); }
              else { onDislike(project.title, -1); }
              setDisliked(!disliked); if (liked) setLiked(false);
            }}
            title="Dislike"
          >👎 {dislikeCount}</button>
        </div>
        <div className="modal-share mb-3">
          <span className="me-2">Share:</span>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn facebook"
            title="Share on Facebook"
          >
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn linkedin"
            title="Share on LinkedIn"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn twitter"
            title="Share on Twitter"
          >
            <i className="bi bi-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

// Renders the projects page with filters, project cards, and modal
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState('');
  const [filterDept, setFilterDept] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterPath, setFilterPath] = useState('');
  const [filterTech, setFilterTech] = useState([]);
  const [likeCounts, setLikeCounts] = useState({ ...demoLikes });
  const [dislikeCounts, setDislikeCounts] = useState({ ...demoDislikes });

  // Fetch project entries on component mount
  useEffect(() => {
    // Fetches all projects from the API and updates state
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

  // Handle like/dislike button clicks for projects
  const handleLike = (title, delta = 1) => {
    setLikeCounts(prev => ({ ...prev, [title]: Math.max(0, (prev[title] || 0) + delta) }));
  };
  const handleDislike = (title, delta = 1) => {
    setDislikeCounts(prev => ({ ...prev, [title]: Math.max(0, (prev[title] || 0) + delta) }));
  };

  
  // Merge project data with extra static data for display
  const getProjectWithExtras = (project) => {
    const extra = projectExtraData[project.title] || {};
    return {
      ...project,
      ...extra,
      department: project.department || extra.department || departments[Math.floor(Math.random()*departments.length)],
      completionYear: project.completionYear || extra.completionYear || (2021 + Math.floor(Math.random()*5)),
      studyPath: project.studyPath || extra.studyPath || studyPaths[Math.floor(Math.random()*studyPaths.length)],
      technologies: extra.technologies || project.technologies || [],
    };
  };

  const filteredProjects = projects
    .map(getProjectWithExtras)
    .filter(project => {
      const matchesSearch = search === '' ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        (project.detailed_description && project.detailed_description.toLowerCase().includes(search.toLowerCase()));
      const matchesDept = !filterDept || project.department === filterDept;
      const matchesYear = !filterYear || String(project.completionYear) === filterYear;
      const matchesPath = !filterPath || project.studyPath === filterPath;
      const matchesTech = filterTech.length === 0 || filterTech.every(t => project.technologies.includes(t));
      return matchesSearch && matchesDept && matchesYear && matchesPath && matchesTech;
    });

  return (
    <div className="projects-container py-5">
      <h2 className="text-center text-primary mb-5">My Projects</h2>
      <div className="project-filters mb-4">
        <form className="filter-form">
          <div className="filter-row">
            <input
              type="text"
              className="filter-input"
              placeholder="Search by topic or keywords..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button
              className="reset-btn"
              type="button"
              onClick={() => {
                setSearch('');
                setFilterDept('');
                setFilterYear('');
                setFilterPath('');
                setFilterTech([]);
              }}
            >
              Reset Filters
            </button>
          </div>
          <div className="filter-row">
            <select className="filter-select" value={filterDept} onChange={e => setFilterDept(e.target.value)}>
              <option value="">All Departments</option>
              {departments.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select className="filter-select" value={filterYear} onChange={e => setFilterYear(e.target.value)}>
              <option value="">All Years</option>
              {[2021,2022,2023,2024,2025].map(y => <option key={y} value={y}>{y}</option>)}
            </select>
            <select className="filter-select" value={filterPath} onChange={e => setFilterPath(e.target.value)}>
              <option value="">All Study Paths</option>
              {studyPaths.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <select
              className="filter-select"
              multiple
              value={filterTech}
              onChange={e => setFilterTech(Array.from(e.target.selectedOptions, o => o.value))}
            >
              {allTechnologies.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <small className="filter-hint">(Hold Ctrl/Cmd to select multiple technologies)</small>
        </form>
      </div>
      <div className="row g-4">
        {filteredProjects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="card project-card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>
                <div className="project-likes mb-2">
                  <span className="like-count" title="Likes">👍 {likeCounts[project.title] ?? 0}</span>
                  <span className="dislike-count ms-3" title="Dislikes">👎 {dislikeCounts[project.title] ?? 0}</span>
                </div>
                <button
                  className="btn btn-outline-primary mt-auto"
                  onClick={() => setSelectedProject(project)}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onLike={handleLike}
        onDislike={handleDislike}
        likeCount={selectedProject ? likeCounts[selectedProject.title] || 0 : 0}
        dislikeCount={selectedProject ? dislikeCounts[selectedProject.title] || 0 : 0}
      />
    </div>
  );
};

export default Projects;
