import React, { useEffect, useState } from 'react';
import {
  getUsers,
  deleteUser,
  updateUser,
} from '../../../services/userService';

// UserManager component for managing users (view, edit, delete) in the admin dashboard.
const UserManager = () => {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedUser, setEditedUser] = useState({
    fullName: '',
    email: '',
  });

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetches all users from the API and updates state
  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  // Start editing a user
  const handleEditClick = (user) => {
    setEditingId(user.id);
    setEditedUser(user);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedUser({ fullName: '', email: '' });
  };

  // Save edited user data
  const handleSaveEdit = async () => {
    await updateUser(editingId, editedUser);
    fetchUsers();
    handleCancelEdit();
  };

  // Delete a user
  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  // Handle input changes for editing user
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="user-manager">
      <style>{`
        .user-manager {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 2rem;
          max-width: 900px;
          margin: auto;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
        }
        .user-manager h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }
        .user-card {
          background-color: #f9f9f9;
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 5px;
        }
        .user-card input {
          width: 100%;
          margin-bottom: 8px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .user-card button {
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

      <h2>Manage Users</h2>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          {editingId === user.id ? (
            <>
              <input
                type="text"
                name="fullName"
                value={editedUser.fullName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
              />
              <button className="save-btn" onClick={handleSaveEdit}>
                Save
              </button>
              <button className="cancel-btn" onClick={handleCancelEdit}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {user.fullName}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <button onClick={() => handleEditClick(user)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserManager;
