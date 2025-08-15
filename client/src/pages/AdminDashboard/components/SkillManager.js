import React, { useEffect, useState } from 'react';
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../../../services/skillService';

const styles = {
  container: {
    marginLeft: '250px',
    padding: '100px 20px 40px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold',
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
    backgroundColor: '#28a745',
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
    backgroundColor: '#f8f9fa',
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

// SkillManager component for managing skills (add, edit, delete) in the admin dashboard.
const SkillManager = () => {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: '', level: '' });
  const [editId, setEditId] = useState(null);

  // Fetch skills on component mount
  useEffect(() => {
    fetchSkills();
  }, []);

  // Fetches all skills from the API and updates state
  const fetchSkills = async () => {
    const res = await getSkills();
    setSkills(res.data);
  };

  // Handle input changes for skill form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission for adding or updating a skill
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateSkill(editId, form);
    } else {
      await createSkill(form);
    }
    setForm({ name: '', level: '' });
    setEditId(null);
    fetchSkills();
  };

  // Start editing a skill
  const handleEdit = (skill) => {
    setForm(skill);
    setEditId(skill.id);
  };

  // Delete a skill
  const handleDelete = async (id) => {
    await deleteSkill(id);
    fetchSkills();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Skills</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Skill Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="level"
          placeholder="Skill Level"
          value={form.level}
          onChange={handleChange}
        />
        <button style={styles.button} type="submit">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Skill</th>
            <th style={styles.th}>Level</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td style={styles.td}>{skill.name}</td>
              <td style={styles.td}>{skill.level}</td>
              <td style={styles.td}>
                <div style={styles.actions}>
                  <button style={styles.button} onClick={() => handleEdit(skill)}>Edit</button>
                  <button style={styles.deleteBtn} onClick={() => handleDelete(skill.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillManager;
