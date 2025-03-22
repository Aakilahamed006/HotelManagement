import React from 'react';
import { useState,useEffect} from 'react';
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
      <h1>Bookings</h1>
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
          </tr>
        </thead>
        <tbody>
          {Allbookings.map((booking,index) => (
            <tr key={booking.bookingId|| index}>
              <td>{booking.bookingId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{booking.guestFullName}</td>
              <td>{booking.guestEmail}</td>
              <td>{booking.NumOfAdults}</td>
              <td>{booking.NumOfChildren}</td>
              <td>{booking.TotalNoGuest}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}
export default Allbookings;