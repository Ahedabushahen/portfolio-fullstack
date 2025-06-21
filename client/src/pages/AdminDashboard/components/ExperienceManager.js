import React, { useEffect, useState } from 'react';
import {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from '../../../services/experienceService';

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

  useEffect(() => {
    loadExperience();
  }, []);

  const loadExperience = async () => {
    const { data } = await getExperience();
    setExperience(data);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
  };

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
              value={formData.start_date.split('T')[0]}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="date"
              className="form-control"
              name="end_date"
              value={formData.end_date.split('T')[0]}
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
