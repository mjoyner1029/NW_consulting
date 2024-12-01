// src/pages/AboutUsPage.js
import React from 'react';

const AboutUsPage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '40px', marginTop: '70px' }}>
      <h1>Who We Are</h1>
      <p>
        Nelson White is a seasoned innovation leader with over seven years of experience in finance, specializing in driving digital transformation and fostering business growth through emerging technologies. He has successfully spearheaded strategic initiatives in collaboration with industry leaders, delivering innovative solutions across diverse sectors, including finance, retail, and healthcare. Nelson’s expertise includes blockchain, decentralized finance, and design thinking, with a focus on building sustainable and future-ready business models.
      </p>
      <p>
        With an MBA from UNC’s Kenan-Flagler Business School and a certificate in Sustainable Enterprise from the Ackerman Center for Excellence in Sustainability, Nelson is dedicated to helping businesses and individuals navigate the rapidly evolving digital landscape and embrace the full potential of decentralized technologies.
      </p>
      <img 
        src="https://via.placeholder.com/1200x500" 
        alt="Nelson White" 
        style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} 
      />
    </div>
  );
};

export default AboutUsPage;
