import React from 'react';
import { Link } from 'react-router-dom';

const OurCoursesPage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h1>Welcome to Course</h1>
      <p>This page is only available for members.</p>
      <div>
        <h3>Decentralization 101 for Business Owners</h3>
        <p>$5.00 Every week</p>
        <button><Link to="/login">Sign Up</Link></button>
      </div>
    </div>
  );
};

export default OurCoursesPage;
