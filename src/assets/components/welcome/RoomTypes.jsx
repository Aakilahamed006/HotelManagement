import React from "react";
import "./RoomTypes.css";  // Style for the component
import Navbar from "./NavBar"; // Import Navbar
import { useNavigate } from "react-router-dom";
const RoomTypes = () => {
  // Array of room types including buffet area
   const navigate = useNavigate();
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description: (
        <span>
          A spacious room with a <em>king-size bed</em>, <strong>balcony</strong>, and a <u>fantastic view</u> of the city.
        </span>
      ),
      image: "\Deluxe-Room-at-The-Leela-Mumbai.jpg.webp",  // Replace with actual image path or URL
    },
    {
      id: 2,
      name: "Standard Room",
      description: (
        <span>
          A comfortable room with modern amenities perfect for short stays, including <strong>fast Wi-Fi</strong> and <em>comfy beds</em>.
        </span>
      ),
      image: "\Deluxe-Room-at-The-Leela-Mumbai.jpg.webp",  // Replace with actual image path or URL
    },
    {
      id: 3,
      name: "Suite Room",
      description: (
        <span>
          A luxurious suite designed for comfort and relaxation. This elegant suite offers a <em>spacious living area</em> with modern décor, perfect for entertaining or unwinding after a busy day. It includes a <strong>private bathtub</strong> with <u>exquisite views</u> to add a touch of serenity, and <strong>elegant furnishings</strong> designed to provide ultimate comfort and style.
        </span>
      ), 
      image: "\Deluxe-Room-at-The-Leela-Mumbai.jpg.webp",  // Replace with actual image path or URL
    },
    {
      id: 4,
      name: "Buffet Area",
      description: (
        <span>
          An <strong>all-you-can-eat buffet</strong> offering a variety of <em>international dishes</em> from around the world.
        </span>
      ),
      image: "Deluxe-Room-at-The-Leela-Mumbai.jpg.webp",  // Replace with actual image path or URL
    },
  ];

  return (
    <div className="contact-container">
      <Navbar /> {/* Include Navbar */}
    <div className="room-types-container">
      <h2>Explore Our Room Types & Buffet Area</h2>
      <button className="book-now" onClick={()=>navigate("/room-availability")}>Book Now</button>
      <div className="rooms-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h3 className="room-name">{room.name}</h3>  {/* Room name at the top, centered */}
            <div className="room-info">
              <p>{room.description}</p> {/* Description rendered below */}
            </div>
            <img
              src={room.image ? room.image : "default-image.jpg"}  // Default image in case of missing image
              alt={room.name}
              className="room-image"
            />
          </div>
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default RoomTypes;
