// src/pages/Media/Media.js
import React, { useEffect, useState } from 'react';
import {
  getMedia,
  createMedia,
  updateMedia,
  deleteMedia
} from '../../services/mediaService';
import './Media.css';

function Media() {
  const [mediaList, setMediaList] = useState([]);
  const [newMedia, setNewMedia] = useState({ title: '', url: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const res = await getMedia();
      setMediaList(res.data);
    } catch (error) {
      console.error('Failed to load media:', error);
    }
  };

  const handleChange = (e) => {
    setNewMedia({ ...newMedia, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateMedia(editingId, newMedia);
      } else {
        await createMedia(newMedia);
      }
      setNewMedia({ title: '', url: '' });
      setEditingId(null);
      loadMedia();
    } catch (error) {
      console.error('Error saving media:', error);
    }
  };

  const handleEdit = (media) => {
    setNewMedia({ title: media.title, url: media.url });
    setEditingId(media.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteMedia(id);
      loadMedia();
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  return (
    <div className="media-container">
      <h2 className="media-title">Media Gallery</h2>
      <form className="media-form" onSubmit={handleSubmit}>
        <input
          name="title"
          value={newMedia.title}
          onChange={handleChange}
          placeholder="Media Title"
          required
        />
        <input
          name="url"
          value={newMedia.url}
          onChange={handleChange}
          placeholder="Media URL"
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>

      <div className="media-list">
        {mediaList.map((media) => (
          <div className="media-item" key={media.id}>
            <img src={media.url} alt={media.title} />
            <h4>{media.title}</h4>
            <div className="media-actions">
              <button onClick={() => handleEdit(media)}>Edit</button>
              <button onClick={() => handleDelete(media.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
