import React from "react";
import Navbar from "./NavBar.jsx"; // Import Navbar
import "./About.css"; // Import styling

const About = () => {
  return (
    <div className="about-container">
      <Navbar /> {/* Include Navbar */}

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Sunset Heaven</h1>
      </div>

      {/* About Content */}
      <div className="about-content">
        <h2>Welcome to Sunset Heaven</h2>
        <p>
          Nestled in the heart of a breathtaking coastal paradise, Sunset Heaven is more than just a hotel; it's an experience. 
          From stunning ocean views to luxurious accommodations, we ensure that your stay with us is unforgettable.
        </p>

        <div className="about-sections">
          {/* Mission Section */}
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide world-class hospitality with an emphasis on comfort, elegance, and sustainability. 
              We aim to create a relaxing haven where every guest feels special.
            </p>
          </div>

          {/* Vision Section */}
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              We aspire to be a symbol of luxury and serenity, offering unparalleled service while preserving the natural beauty around us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
