// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#2a2a2a', padding: '15px', position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <div>
          <Link to="/about-us" style={linkStyle}>About Us</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
        </div>
      </div>
    </nav>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  padding: '10px 20px',
  margin: '0 10px',
  fontWeight: 'bold',
};

export default Navbar;
