// src/pages/Blog/Blog.js
import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../services/blogService';
import './Blog.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await getBlogs();
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="blog-section">
      <h2 className="blog-title">Latest Blog Posts</h2>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p className="blog-date">{new Date(blog.date).toLocaleDateString()}</p>
            <p className="blog-content">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
