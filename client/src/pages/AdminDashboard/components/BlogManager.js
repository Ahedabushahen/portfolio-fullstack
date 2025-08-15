import React, { useEffect, useState } from 'react';
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../../../services/blogService';

// BlogManager component for managing blog posts (add, edit, delete) in the admin dashboard.
const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [editId, setEditId] = useState(null);

  // Fetch blog posts on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetches all blog posts from the API and updates state
  const fetchBlogs = async () => {
    const res = await getBlogs();
    setBlogs(res.data);
  };

  // Handle input changes for blog form
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Handle form submission for adding or updating a blog post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateBlog(editId, form);
    } else {
      await createBlog(form);
    }
    setForm({ title: '', content: '', author: '' });
    setEditId(null);
    fetchBlogs();
  };

  // Start editing a blog post
  const handleEdit = (blog) => {
    setForm(blog);
    setEditId(blog.id);
  };

  // Delete a blog post
  const handleDelete = async (id) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  return (
    <div className="blog-manager-wrapper">
      <style>{`
        .blog-manager-wrapper {
          max-width: 1100px;
          margin: 50px auto;
          padding: 40px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          font-family: 'Segoe UI', sans-serif;
        }

        .blog-manager-wrapper h2 {
          text-align: center;
          color: #2d7a33;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: 700;
        }

        .blog-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 40px;
        }

        .blog-form input,
        .blog-form textarea {
          padding: 12px 14px;
          border: 1px solid #ced4da;
          border-radius: 6px;
          font-size: 15px;
          width: 100%;
        }

        .blog-form textarea {
          resize: vertical;
          min-height: 120px;
        }

        .blog-form button {
          align-self: flex-start;
          background-color: #28a745;
          color: white;
          padding: 12px 20px;
          font-weight: bold;
          font-size: 15px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .blog-form button:hover {
          background-color: #218838;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: #fefefe;
        }

        th, td {
          padding: 14px 16px;
          border: 1px solid #dee2e6;
          font-size: 14px;
          vertical-align: top;
        }

        th {
          background-color: #f1f3f5;
          text-align: left;
          font-weight: 600;
        }

        td {
          color: #333;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
        }

        .action-buttons button {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          font-size: 13px;
          cursor: pointer;
          font-weight: 500;
        }

        .edit-btn {
          background-color: #007bff;
          color: #fff;
        }

        .edit-btn:hover {
          background-color: #0069d9;
        }

        .delete-btn {
          background-color: #dc3545;
          color: #fff;
        }

        .delete-btn:hover {
          background-color: #c82333;
        }
      `}</style>

      <h2>📝 Manage Blog Posts</h2>

      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? 'Update Blog' : 'Add Blog'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Title</th>
            <th style={{ width: '15%' }}>Author</th>
            <th style={{ width: '45%' }}>Content</th>
            <th style={{ width: '20%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>{blog.content}</td>
              <td>
                <div className="action-buttons">
                  <button className="edit-btn" onClick={() => handleEdit(blog)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(blog.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManager;
