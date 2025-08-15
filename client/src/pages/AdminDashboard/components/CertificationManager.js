import React, { useEffect, useState } from 'react';
import {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
} from '../../../services/certificationService';

// CertificationManager component for managing certifications (add, edit, delete) in the admin dashboard.
const CertificationManager = () => {
  const [certifications, setCertifications] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    issue_date: '',
    credential_url: ''
  });

  const [editCert, setEditCert] = useState(null);

  // Fetch certifications on component mount
  useEffect(() => {
    fetchCertifications();
  }, []);

  // Fetches all certifications from the API and updates state
  const fetchCertifications = async () => {
    try {
      const { data } = await getCertifications();
      setCertifications(data);
    } catch (err) {
      console.error('Failed to fetch certifications', err);
    }
  };

  // Handle input changes for new certification form
  const handleChange = (e) => {
    setNewCert({ ...newCert, [e.target.name]: e.target.value });
  };

  // Handle input changes for editing certification
  const handleEditChange = (e) => {
    setEditCert({ ...editCert, [e.target.name]: e.target.value });
  };

  // Start editing a certification
  const handleEditClick = (cert) => {
    setEditingId(cert.id);
    setEditCert({
      title: cert.title,
      issuer: cert.issuer,
      issue_date: cert.issue_date?.substring(0, 10) || '',
      credential_url: cert.credential_url
    });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditCert(null);
  };

  // Save edited certification
  const handleSaveEdit = async () => {
    try {
      await updateCertification(editingId, editCert);
      fetchCertifications();
      handleCancelEdit();
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  // Delete a certification
  const handleDelete = async (id) => {
    await deleteCertification(id);
    fetchCertifications();
  };

  // Create a new certification
  const handleCreate = async () => {
    try {
      await createCertification(newCert);
      fetchCertifications();
      setNewCert({
        title: '',
        issuer: '',
        issue_date: '',
        credential_url: ''
      });
    } catch (err) {
      console.error('Creation failed', err);
    }
  };

  return (
    <div className="certification-manager">
      <style>{`
        .certification-manager {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 2rem;
          max-width: 900px;
          margin: auto;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
        }
        .certification-manager h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }
        .certification-card {
          background-color: #f9f9f9;
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 5px;
        }
        input, textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          margin-right: 8px;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .save-btn {
          background-color: #2ecc71;
          color: white;
        }
        .cancel-btn {
          background-color: #bdc3c7;
        }
        .delete-btn {
          background-color: #e74c3c;
          color: white;
        }
      `}</style>

      <h2>Manage Certifications</h2>

      {/* Create New */}
      <div className="certification-card">
        <input name="title" placeholder="Title" value={newCert.title} onChange={handleChange} />
        <input name="issuer" placeholder="Issuer" value={newCert.issuer} onChange={handleChange} />
        <input name="issue_date" type="date" placeholder="Issue Date" value={newCert.issue_date} onChange={handleChange} />
        <input name="credential_url" placeholder="Credential URL" value={newCert.credential_url} onChange={handleChange} />
        <button className="save-btn" onClick={handleCreate}>Add Certification</button>
      </div>

      {/* Existing Certifications */}
      {certifications.map((cert) => (
        <div key={cert.id} className="certification-card">
          {editingId === cert.id ? (
            <>
              <input name="title" value={editCert?.title || ''} onChange={handleEditChange} />
              <input name="issuer" value={editCert?.issuer || ''} onChange={handleEditChange} />
              <input name="issue_date" type="date" value={editCert?.issue_date || ''} onChange={handleEditChange} />
              <input name="credential_url" value={editCert?.credential_url || ''} onChange={handleEditChange} />
              <button className="save-btn" onClick={handleSaveEdit}>Save</button>
              <button className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <p><strong>Title:</strong> {cert.title}</p>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Issued:</strong> {cert.issue_date?.substring(0, 10)}</p>
              <p><strong>Credential URL:</strong> <a href={cert.credential_url} target="_blank" rel="noopener noreferrer">{cert.credential_url}</a></p>
              <button onClick={() => handleEditClick(cert)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(cert.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CertificationManager;
