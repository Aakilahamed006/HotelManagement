import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AvailableRooms.css";
import Navbar from "./NavBar.jsx"; // Import Navbar
const AvailableRooms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { availability } = location.state || {};  // Extract availability from the state
  
  const handleBookRoom = (roomId) => {
    navigate("/BookRoom", { state: { roomId } });
  };

  return (
    <div className="about-container">
      <Navbar /> {/* Include Navbar */}
    <div className="availability-container">
      <h2>Available Rooms</h2>
      {availability && availability.length > 0 ? (
        <ul>
          {availability.map((room) => (
            <li key={room.roomId}>
              <img
                src={room.roomPhoto ? `data:image/jpeg;base64,${room.roomPhoto}` : "default-image.jpg"}
                alt={room.roomType}
              />
              <div>
                <p>Room: {room.roomType}</p>
                <p>Price: ${room.roomPrice}</p>
                
              </div>
              <button onClick={() => handleBookRoom(room.roomId)}>Book Room</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No availability data to show.</p>
      )}
    </div>
    </div>
  );
};

export default AvailableRooms;
