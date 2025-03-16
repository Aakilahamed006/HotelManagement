import React from "react";
import Navbar from "./NavBar"; // Import Navbar
import "./Contact.css"; // Styling

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar /> {/* Include Navbar */}

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Email: contact@sunsetheaven.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Location: 123 Ocean Drive, Paradise Island</p>
      </div>
    </div>
  );
};

export default Contact;
