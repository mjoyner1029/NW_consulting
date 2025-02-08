import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px",
    gap: "20px",
    backgroundColor: "#111",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/services">Our Services</Link>
      <Link to="/courses">Our Courses</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  );
};

export default Navbar;
