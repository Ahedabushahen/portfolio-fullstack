import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

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
      // Send to Contact table
      await axios.post('http://localhost:5000/api/contact', {
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      // Save to Users table only if not exists
      await axios.post('http://localhost:5000/api/users', {
        fullName: formData.fullName, // <-- FIXED
        email: formData.email,
      });

      setStatus('✅ Message sent successfully!');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err.response?.data || err.message);
      setStatus('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
