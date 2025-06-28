// src/pages/Blog/Blog.js

import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../services/blogService';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogs();
        setBlogs(res.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page container py-5">
      <h2 className="text-center text-success fw-bold mb-5">📝 My Blog</h2>
      <div className="row g-4">
        {blogs.map((blog) => (
          <div className="col-md-6 col-lg-4" key={blog.id}>
            <div className="card blog-card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
              
                <p className="card-text text-muted">{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
