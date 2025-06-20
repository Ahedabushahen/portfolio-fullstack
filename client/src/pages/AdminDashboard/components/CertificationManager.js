import React, { useEffect, useState } from 'react';
import {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
} from '../../../services/certificationService';

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
  button: {
    backgroundColor: '#28a745',
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

const CertificationManager = () => {
  const [certifications, setCertifications] = useState([]);
  const [form, setForm] = useState({
    name: '',
    organization: '',
    issueDate: '',
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    const res = await getCertifications();
    setCertifications(res.data);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateCertification(editId, form);
    } else {
      await createCertification(form);
    }
    setForm({ name: '', organization: '', issueDate: '' });
    setEditId(null);
    fetchCertifications();
  };

  const handleEdit = (cert) => {
    setForm(cert);
    setEditId(cert.id);
  };

  const handleDelete = async (id) => {
    await deleteCertification(id);
    fetchCertifications();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Certifications</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Certification Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="organization"
          placeholder="Organization"
          value={form.organization}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="date"
          name="issueDate"
          value={form.issueDate}
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
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Organization</th>
            <th style={styles.th}>Issue Date</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((cert) => (
            <tr key={cert.id}>
              <td style={styles.td}>{cert.name}</td>
              <td style={styles.td}>{cert.organization}</td>
              <td style={styles.td}>{cert.issueDate}</td>
              <td style={styles.td}>
                <button
                  style={{ ...styles.actionBtn, ...styles.editBtn }}
                  onClick={() => handleEdit(cert)}
                >
                  Edit
                </button>
                <button
                  style={{ ...styles.actionBtn, ...styles.deleteBtn }}
                  onClick={() => handleDelete(cert.id)}
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

export default CertificationManager;
