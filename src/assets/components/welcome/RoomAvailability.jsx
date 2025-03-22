import React, { useState } from "react";
import "./RoomAvailability.css";
import { useNavigate } from "react-router-dom";
import { useDateContext } from "./DateContext";
import Navbar from "./NavBar.jsx"; // Import Navbar 
const RoomAvailability = () => {
  const navigate = useNavigate();
  const { checkInDate, setCheckInDate, checkOutDate, setCheckOutDate } = useDateContext();

  const [error, setError] = useState("");
  const [availability, setAvailability] = useState([]);

  const handleCheckAvailability = async () => {
    if (!checkInDate || !checkOutDate) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    setError("");

    try {
      const response = await fetch(
        `http://localhost:8080/api/bookedrooms/getavailablerooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
      );
      const data = await response.json();
      setAvailability(data);
      
      // Navigate to the new route and pass the availability data
      navigate("/AvailabeRooms", { state: { availability: data } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="about-container">
      <Navbar /> {/* Include Navbar */}
    <div className="room-availability-container">
      <h2>Check Room Availability</h2>
      <div className="input-group">
        <label>Check-In Date:</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Check-Out Date:</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      {error && <p className="error">{error}</p>}
      {availability && <p className="success">{availability}</p>}
      <button onClick={handleCheckAvailability}>Check Availability</button>
    </div>
    </div>
  );
};

export default RoomAvailability;
