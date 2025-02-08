import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <p>
        Ready to push boundaries with us? Share your details and let’s forge something extraordinary together.
        We’re excited to explore new horizons together!
      </p>
      <p>
        <strong>Phone:</strong> (555) 123-4567<br />
        <strong>Email:</strong> info@nelsonwhiteconsulting.com
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "1 1 300px" }}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px" }}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px" }}
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <br />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ width: "100%", padding: "10px", minHeight: "100px" }}
                required
              />
            </div>
            <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
          </form>
        </div>
        <div style={{ flex: "1 1 300px" }}>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Contact us"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
