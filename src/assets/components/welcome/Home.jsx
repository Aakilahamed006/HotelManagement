import React from "react";
import "./Home.css"; // Import CSS for styling
import Navbar from "./NavBar.jsx";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate(); 
  return (
    <div className="home-container"> {/* ✅ Fixed Class Name */}
      <Navbar /> {/* Include Navbar */}

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Sunset Heaven</h1>
          <p>Experience luxury and comfort with breathtaking ocean views.</p>
          <button className="book-nows" onClick={()=>navigate("/room-availability")}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
