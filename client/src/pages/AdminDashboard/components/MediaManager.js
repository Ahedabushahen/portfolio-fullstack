import React, { useEffect, useState } from 'react';
import {
  getMedia,
  createMedia,
  updateMedia,
  deleteMedia,
} from '../../../services/mediaService';

const MediaManager = () => {
  const [media, setMedia] = useState([]);
  const [formData, setFormData] = useState({ title: '', url: '' });

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    const { data } = await getMedia();
    setMedia(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMedia(formData);
    setFormData({ title: '', url: '' });
    loadMedia();
  };

  const handleDelete = async (id) => {
    await deleteMedia(id);
    loadMedia();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="media-container">
      <style>{`
        .media-container {
          background: #fff;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: auto;
        }
        .media-container h2 {
          margin-bottom: 1.5rem;
          color: #2c3e50;
          text-align: center;
        }
        .media-form {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
        }
        .media-form input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          flex: 1;
          min-width: 200px;
        }
        .media-form button {
          padding: 10px 16px;
          background-color: #27ae60;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .media-form button:hover {
          background-color: #1e8e4d;
        }
        .media-list {
          list-style: none;
          padding: 0;
        }
        .media-list li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 4px;
        }
        .media-list a {
          color: #2980b9;
          text-decoration: none;
        }
        .media-list button {
          background-color: #c0392b;
          color: white;
          border: none;
          padding: 6px 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        .media-list button:hover {
          background-color: #962d22;
        }
      `}</style>

      <h2>Manage Media</h2>
      <form onSubmit={handleSubmit} className="media-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="url"
          placeholder="Media URL"
          value={formData.url}
          onChange={handleChange}
        />
        <button type="submit">Add Media</button>
      </form>

      <ul className="media-list">
        {media.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaManager;
