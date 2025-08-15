import React, { useEffect, useState } from 'react';
import {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from '../../../services/experienceService';

// ExperienceManager component for managing experience entries (add, edit, delete) in the admin dashboard.
const ExperienceManager = () => {
  const [experience, setExperience] = useState([]);
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    start_date: '',
    end_date: '',
    description: ''
  });
  const [editId, setEditId] = useState(null);

  // Fetch experience entries on component mount
  useEffect(() => {
    loadExperience();
  }, []);

  // Fetches all experience entries from the API and updates state
  const loadExperience = async () => {
    const { data } = await getExperience();
    setExperience(data);
  };

  // Handle input changes for experience form
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission for adding or updating an experience entry
  const handleSubmit = async (e) => {
    e.preventDefault();

    const start = new Date(formData.start_date);
    const end = new Date(formData.end_date);

    if (formData.end_date && start > end) {
      alert('Start date must be before end date.');
      return;
    }

    if (editId) {
      await updateExperience(editId, formData);
    } else {
      await createExperience(formData);
    }

    setFormData({
      company: '',
      role: '',
      start_date: '',
      end_date: '',
      description: ''
    });
    setEditId(null);
    loadExperience();
  };

  // Start editing an experience entry
  const handleEdit = (item) => {
    setFormData({
      company: item.company,
      role: item.role,
      start_date: item.start_date.split('T')[0],
      end_date: item.end_date?.split('T')[0] || '',
      description: item.description
    });
    setEditId(item.id);
  };

  // Delete an experience entry
  const handleDelete = async (id) => {
    await deleteExperience(id);
    loadExperience();
  };

  return (
    <div className="container mt-5 mb-5">
      <style>{`
        .form-control, .form-control:focus {
          box-shadow: none;
        }
        .btn-primary {
          background-color: #007bff;
          border: none;
        }
        .btn-primary:hover {
          background-color: #0069d9;
        }
        .btn-danger {
          background-color: #dc3545;
          border: none;
        }
        .btn-danger:hover {
          background-color: #c82333;
        }
        .table td, .table th {
          vertical-align: middle;
        }
      `}</style>

      <div className="p-4 bg-white rounded shadow-sm">
        <h2 className="text-center text-success fw-bold mb-3">
          👨‍💼 Manage Experience
        </h2>
        <hr className="border border-success opacity-50" />

        <form onSubmit={handleSubmit} className="row g-3 mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="date"
              className="form-control"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="date"
              className="form-control"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-5">
              {editId ? 'Update Experience' : 'Add Experience'}
            </button>
          </div>
        </form>

        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Start</th>
              <th>End</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {experience.map((item) => (
              <tr key={item.id}>
                <td>{item.company}</td>
                <td>{item.role}</td>
                <td>{item.start_date?.split('T')[0]}</td>
                <td>{item.end_date?.split('T')[0]}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExperienceManager;
