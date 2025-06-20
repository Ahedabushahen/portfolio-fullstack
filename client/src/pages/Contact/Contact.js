// src/pages/Contact/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/contacts', {
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setStatus('✅ Message sent successfully!');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 text-primary">Contact Me</h2>
      {status && <div className="alert alert-info">{status}</div>}

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            name="subject"
            className="form-control"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
