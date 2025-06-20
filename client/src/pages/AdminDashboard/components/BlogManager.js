import React, { useEffect, useState } from 'react';
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../../../services/blogService';

const styles = {
  container: {
    marginLeft: '250px',
    padding: '100px 20px 40px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: '1 1 250px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#17a2b8',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f1f1f1',
    textAlign: 'left',
    padding: '10px',
    border: '1px solid #ccc',
  },
  td: {
    padding: '10px',
    border: '1px solid #ccc',
    verticalAlign: 'top',
  },
  actionBtn: {
    marginRight: '10px',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  editBtn: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
  },
};

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    content: '',
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await getBlogs();
    setBlogs(res.data);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateBlog(editId, form);
    } else {
      await createBlog(form);
    }
    setForm({ title: '', content: '' });
    setEditId(null);
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setForm(blog);
    setEditId(blog.id);
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Blog Posts</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          style={styles.textarea}
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />
        <button style={styles.button} type="submit">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Content</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td style={styles.td}>{blog.title}</td>
              <td style={styles.td}>{blog.content}</td>
              <td style={styles.td}>
                <button
                  style={{ ...styles.actionBtn, ...styles.editBtn }}
                  onClick={() => handleEdit(blog)}
                >
                  Edit
                </button>
                <button
                  style={{ ...styles.actionBtn, ...styles.deleteBtn }}
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManager;
