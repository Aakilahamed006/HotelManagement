import React from 'react';
import { useState,useEffect} from 'react';
import "./Allbookings.css";
const Allbookings=()=>{
const [Allbookings,setAllbookings]=useState([]);
useEffect(()=>{
    fetch("http://localhost:8080/api/bookedrooms/getallbookings")  // Fetch data from the API
    .then((res) => res.json())  // Parse the JSON data
    .then((data) => setAllbookings(data))  // Store the data in the state
    .catch((error) => console.error("Error fetching data:", error));  // Handle errors
}, []);

return (
    <div>
      <h4>Bookings</h4>
      <button className="mbtn" onClick={() => window.location.href = "/SingleBed"}>Back</button>
      <button className="mbtn" onClick={() => window.print()}>Print</button>
      <button className="mbtn" onClick={() => window.location.reload()}>Refresh</button>
      
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Guest Name</th>
            <th>Guest Email</th>
            <th>Number of Adults</th>
            <th>Number of Children</th>
            <th>Total Guests</th>
            <th>Booking confirmation code</th>
            <th>Room Id</th>
          </tr>
        </thead>
        <tbody>
          {Allbookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{booking.guestFullName}</td>
              <td>{booking.guestEmail}</td>
              <td>{booking.numOfAdults}</td>
              <td>{booking.numOfChildren}</td>
              <td>{booking.totalNoGuest}</td>
              <td>{booking.bookingConfirmationCode}</td>
              <td>{booking.roomId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}
export default Allbookings;