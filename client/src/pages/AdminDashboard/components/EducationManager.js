import React, { useEffect, useState } from 'react';
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from '../../../services/educationService';

const EducationManager = () => {
  const [education, setEducation] = useState([]);
  const [form, setForm] = useState({
    institution: '',
    degree: '',
    field_of_study: '',
    start_year: '',
    end_year: '',
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    loadEducation();
  }, []);

  const loadEducation = async () => {
    const res = await getEducation();
    setEducation(res.data);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const start = parseInt(form.start_year);
    const end = parseInt(form.end_year);

    if (form.end_year && start > end) {
      alert('Start year must be before end year.');
      return;
    }

    if (editId) {
      await updateEducation(editId, form);
    } else {
      await createEducation(form);
    }

    setForm({
      institution: '',
      degree: '',
      field_of_study: '',
      start_year: '',
      end_year: '',
    });
    setEditId(null);
    loadEducation();
  };

  const handleEdit = (item) => {
    setForm({
      institution: item.institution,
      degree: item.degree,
      field_of_study: item.field_of_study,
      start_year: item.start_year,
      end_year: item.end_year || '',
    });
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await deleteEducation(id);
    loadEducation();
  };

  return (
    <div className="container mt-5">
      <style>{`
        .table th, .table td {
          vertical-align: middle;
        }
        .form-control:focus {
          box-shadow: none;
        }
        .btn-success {
          background-color: #28a745;
          border: none;
        }
        .btn-success:hover {
          background-color: #218838;
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
      `}</style>

      <div className="p-4 bg-white rounded shadow-sm">
        <h2 className="text-center text-success fw-bold mb-3">🎓 Manage Education</h2>
        <hr className="border border-success opacity-50" />

        <form onSubmit={handleSubmit} className="row g-3 mb-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="institution"
              placeholder="Institution"
              value={form.institution}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="degree"
              placeholder="Degree"
              value={form.degree}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="field_of_study"
              placeholder="Field of Study"
              value={form.field_of_study}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              name="start_year"
              placeholder="Start Year"
              value={form.start_year}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              name="end_year"
              placeholder="End Year"
              value={form.end_year}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-4">
              {editId ? 'Update Education' : 'Add Education'}
            </button>
          </div>
        </form>

        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Institution</th>
              <th>Degree</th>
              <th>Field</th>
              <th>Start</th>
              <th>End</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu) => (
              <tr key={edu.id}>
                <td>{edu.institution}</td>
                <td>{edu.degree}</td>
                <td>{edu.field_of_study}</td>
                <td>{edu.start_year}</td>
                <td>{edu.end_year}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(edu)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(edu.id)}
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

export default EducationManager;
