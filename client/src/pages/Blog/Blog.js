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
    <div className="blog-container py-5">
      <h2 className="text-center mb-4">My Blog</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-6 mb-4" key={blog.id}>
            <div className="card blog-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-meta text-muted mb-2">Posted on: {blog.date}</p>
                <p className="card-text">{blog.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
