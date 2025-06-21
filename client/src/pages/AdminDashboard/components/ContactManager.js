import React, { useEffect, useState } from 'react';
import {
  getContacts,
  deleteContact,
  updateContact,
} from '../../../services/contactService';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedContact, setEditedContact] = useState({
    name: '',
    email: '',
    message: '',
    reply: ''
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const { data } = await getContacts();
      setContacts(data);
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };

  const handleEditClick = (contact) => {
    setEditingId(contact.id);
    setEditedContact(contact);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedContact({ name: '', email: '', message: '', reply: '' });
  };

  const handleSaveEdit = async () => {
    await updateContact(editingId, editedContact);
    fetchContacts();
    handleCancelEdit();
  };

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchContacts();
  };

  const handleChange = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-manager">
      <style>{`
        .contact-manager {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 2rem;
          max-width: 900px;
          margin: auto;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
        }
        .contact-manager h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }
        .contact-card {
          background-color: #f9f9f9;
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 5px;
        }
        .contact-card input,
        .contact-card textarea {
          width: 100%;
          margin-bottom: 8px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .contact-card button {
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

      <h2>Manage Messages</h2>
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-card">
          {editingId === contact.id ? (
            <>
              <input
                type="text"
                name="name"
                value={editedContact.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={editedContact.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="3"
                value={editedContact.message}
                onChange={handleChange}
              />
              <textarea
                name="reply"
                rows="2"
                placeholder="Reply"
                value={editedContact.reply}
                onChange={handleChange}
              />
              <button className="save-btn" onClick={handleSaveEdit}>Save</button>
              <button className="cancel-btn" onClick={handleCancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <p><strong>Reply:</strong> {contact.reply || 'Not replied yet'}</p>
              <button onClick={() => handleEditClick(contact)}>Reply</button>
              <button className="delete-btn" onClick={() => handleDelete(contact.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactManager;
