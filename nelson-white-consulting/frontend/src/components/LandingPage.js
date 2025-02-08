import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <img
        src="https://via.placeholder.com/1920x1080"
        alt="Background"
        className="landing-background"
      />
      <div className="landing-overlay">
        <h1>Empowering Tomorrow’s Business Visionaries</h1>
        <p>
          Fuel your growth with innovative strategies and decentralized solutions.
          We leverage industry insights and cutting-edge blockchain technology to help
          you navigate the evolving crypto ecosystem, driving your business forward
          with tailored models and market expertise.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
