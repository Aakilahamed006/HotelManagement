import React, { useState } from "react";
import { useDateContext } from "./DateContext";  // You only need to import the custom hook
import { useLocation, useNavigate } from "react-router-dom";
import './BookRoom.css';  // Import the specific CSS file for this component
import Navbar from "./NavBar.jsx"; // Import Navbar
const BookRoom = () => {
   const navigate = useNavigate();
   const { checkInDate, checkOutDate } = useDateContext();  // Call the custom hook directly to get the context values
   const location = useLocation();
   const { roomId } = location.state || {};
   // Set the initial state with the context values
   
   const [formData, setFormData] = useState({
      checkInDate: checkInDate || '',
      checkOutDate: checkOutDate || '',
      guestFullName: '',
      guestEmail: '',
      numOfAdults: 0,
      numOfChildren: 0,
      totalNoGuest: 0,
      bookingConfirmationCode: 0,
      room: { roomId: roomId || '' },
   });

   // Handle changes in input fields
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      fetch('http://localhost:8080/api/bookedrooms', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
      })
      .then((response) => {
         if (!response.ok) {
            throw new Error('Network response was not ok');
         }
         return response.json();  // Parse JSON response
      })
      .then((data) => {
         console.log('Success:', data);

         // Extract confirmation code and show it to the user
         if (data.confirmationCode) {
            alert(`Booking successful!\nYour confirmation code: ${data.confirmationCode}`);
            navigate("/");
         } else {
            alert('Booking successful, but no confirmation code received.');
         }
      })
      .catch((error) => {
         console.error('Error:', error);
         alert('There was an error submitting the form');
      });
   };

   return (
      <div className="about-container">
      <Navbar /> {/* Include Navbar */}
      <div className="booking-form-container">
       
         <div className="booking-form">
            <h2>Guest Booking Form</h2>
            
            <form onSubmit={handleSubmit}>
               <div>
                  <label>Guest Full Name:</label>
                  <input
                     type="text"
                     name="guestFullName"
                     value={formData.guestFullName}
                     onChange={handleChange}
                     required
                  />
               </div>
               <div>
                  <label>Guest Email:</label>
                  <input
                     type="email"
                     name="guestEmail"
                     value={formData.guestEmail}
                     onChange={handleChange}
                     required
                  />
               </div>
               <div>
                  <label>Number of Adults:</label>
                  <input
                     type="number"
                     name="numOfAdults"
                     value={formData.numOfAdults}
                     onChange={handleChange}
                     min="0"
                     required
                  />
               </div>
               <div>
                  <label>Number of Children:</label>
                  <input
                     type="number"
                     name="numOfChildren"
                     value={formData.numOfChildren}
                     onChange={handleChange}
                     min="0"
                     required
                  />
               </div>
               <div>
                  <label>Total Number of Guests:</label>
                  <input
                     type="number"
                     name="totalNoGuest"
                     value={formData.totalNoGuest}
                     onChange={handleChange}
                     min="0"
                     required
                  />
               </div>
               <button type="submit">Submit</button>
            </form>
         </div>
      </div>
      </div>
   );
   
};

export default BookRoom;
