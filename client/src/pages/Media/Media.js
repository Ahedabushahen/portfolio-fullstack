// src/pages/Media/Media.js

import React, { useEffect, useState } from 'react';
import { getMedia } from '../../services/mediaService';
import './Media.css';

const Media = () => {
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await getMedia();
        setMediaItems(res.data);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="media-container py-5">
      <h2 className="text-center mb-4">Media Gallery</h2>
      <div className="row">
        {mediaItems.map((item) => (
          <div className="col-md-4 col-lg-3 mb-4" key={item.id}>
            <div className="media-card shadow-sm">
              <img src={item.url} alt={item.title} className="img-fluid rounded" />
              <div className="media-info mt-2 text-center">
                <h6>{item.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
