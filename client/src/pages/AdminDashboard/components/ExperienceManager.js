import React, { useEffect, useState } from 'react';
import {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from '../../../services/experienceService';

const ExperienceManager = () => {
  const [experience, setExperience] = useState([]);
  const [formData, setFormData] = useState({ title: '', company: '', duration: '' });

  useEffect(() => {
    loadExperience();
  }, []);

  const loadExperience = async () => {
    const { data } = await getExperience();
    setExperience(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createExperience(formData);
    setFormData({ title: '', company: '', duration: '' });
    loadExperience();
  };

  const handleDelete = async (id) => {
    await deleteExperience(id);
    loadExperience();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="manager-container">
      <style>{`
        .manager-container {
          background: #fff;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: auto;
        }
        .manager-container h2 {
          margin-bottom: 1.5rem;
          color: #2c3e50;
          text-align: center;
        }
        .manager-form {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
        }
        .manager-form input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          flex: 1;
          min-width: 200px;
        }
        .manager-form button {
          padding: 10px 16px;
          background-color: #2980b9;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .manager-form button:hover {
          background-color: #1f6391;
        }
        .manager-list {
          list-style: none;
          padding: 0;
        }
        .manager-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 4px;
        }
        .manager-list button {
          background-color: #c0392b;
          color: white;
          border: none;
          padding: 6px 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        .manager-list button:hover {
          background-color: #962d22;
        }
      `}</style>

      <h2>Manage Experience</h2>
      <form onSubmit={handleSubmit} className="manager-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
        />
        <button type="submit">Add Experience</button>
      </form>

      <ul className="manager-list">
        {experience.map((item) => (
          <li key={item.id}>
            <div>
              <strong>{item.title}</strong> at <em>{item.company}</em> ({item.duration})
            </div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceManager;
