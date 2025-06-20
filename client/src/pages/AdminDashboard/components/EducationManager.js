import React, { useEffect, useState } from 'react';
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from '../../../services/educationService';

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

const EducationManager = () => {
  const [educationList, setEducationList] = useState([]);
  const [form, setForm] = useState({
    school: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    const res = await getEducation();
    setEducationList(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateEducation(editId, form);
    } else {
      await createEducation(form);
    }
    setForm({
      school: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
    });
    setEditId(null);
    fetchEducation();
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await deleteEducation(id);
    fetchEducation();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Education</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          name="school"
          placeholder="School Name"
          value={form.school}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="degree"
          placeholder="Degree"
          value={form.degree}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="field"
          placeholder="Field of Study"
          value={form.field}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
        />
        <button style={styles.button} type="submit">
          {editId ? 'Update' : 'Add'}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>School</th>
            <th style={styles.th}>Degree</th>
            <th style={styles.th}>Field</th>
            <th style={styles.th}>Start</th>
            <th style={styles.th}>End</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {educationList.map((edu) => (
            <tr key={edu.id}>
              <td style={styles.td}>{edu.school}</td>
              <td style={styles.td}>{edu.degree}</td>
              <td style={styles.td}>{edu.field}</td>
              <td style={styles.td}>{edu.startDate}</td>
              <td style={styles.td}>{edu.endDate}</td>
              <td style={styles.td}>
                <div style={styles.actions}>
                  <button style={styles.button} onClick={() => handleEdit(edu)}>
                    Edit
                  </button>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(edu.id)}
                  >
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

export default EducationManager;
