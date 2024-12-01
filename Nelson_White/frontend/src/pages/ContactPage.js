// src/pages/ContactPage.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (API call, email service, etc.)
    console.log(formData);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '40px', marginTop: '70px' }}>
      <h1>Contact Us</h1>
      <p>Ready to push boundaries with us? Share your details and let’s forge something extraordinary together. We’re excited to explore new horizons together!</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: contact@nelsonwhite.com</p>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '10px', margin: '10px 0', height: '150px' }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }}>
          Submit
        </button>
      </form>

      <img 
        src="https://via.placeholder.com/1200x500" 
        alt="Contact" 
        style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', marginTop: '20px' }}
      />
    </div>
  );
};

export default ContactPage;
