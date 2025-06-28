import React, { useEffect, useState } from 'react';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../../../services/projectService';

const styles = {
   container: {
   
    padding: '100px'
       
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    flex: '1 1 200px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f1f1f1',
    textAlign: 'left',
    padding: '10px',
    border: '1px solid #ddd',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
  },
  actions: {
    display: 'flex',
    gap: '8px',
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    github: '',
    demo: '',
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await getProjects();
    setProjects(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      description: form.description,
      image: form.image,
      github_url: form.github,
      live_url: form.demo,
    };

    if (editId) {
      await updateProject(editId, payload);
    } else {
      await createProject(payload);
    }

    setForm({ title: '', description: '', image: '', github: '', demo: '' });
    setEditId(null);
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title || '',
      description: project.description || '',
      image: project.image || '',
      github: project.github_url || '',
      demo: project.live_url || '',
    });
    setEditId(project.id);
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    fetchProjects();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Projects</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="text"
          name="github"
          placeholder="GitHub Link"
          value={form.github}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="text"
          name="demo"
          placeholder="Demo URL"
          value={form.demo}
          onChange={handleChange}
        />
        <button style={styles.button} type="submit">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((proj) => (
            <tr key={proj.id}>
              <td style={styles.td}>{proj.title}</td>
              <td style={styles.td}>{proj.description}</td>
              <td style={styles.td}>
                <div style={styles.actions}>
                  <button style={styles.button} onClick={() => handleEdit(proj)}>
                    Edit
                  </button>
                  <button style={styles.deleteBtn} onClick={() => handleDelete(proj.id)}>
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

export default ProjectManager;
