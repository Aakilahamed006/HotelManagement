import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBed from './assets/components/rooms/SingleBed.jsx'
import Home from './assets/components/welcome/Home.jsx';
import About from './assets/components/welcome/About.jsx';
import Contact from './assets/components/welcome/Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomAvailability from './assets/components/welcome/RoomAvailability.jsx';
import AvailabeRooms from './assets/components/welcome/AvailableRooms.jsx';
import BookRoom from './assets/components/welcome/BookRoom.jsx';
import { DateProvider } from './assets/components/welcome/DateContext.jsx';
import RoomTypes from './assets/components/welcome/RoomTypes.jsx';
import Allbookings from './assets/components/rooms/Allbookings.jsx';
function App() {
 

  return (
    <DateProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room-availability" element={<RoomAvailability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="AvailabeRooms" element={<AvailabeRooms />} /> 
        <Route path="BookRoom" element={<BookRoom />} /> 
        <Route path="/rooms" element={<RoomTypes />} />
        <Route path="/singlebed" element={<SingleBed />} />
        <Route path="/Allbookings" element={<Allbookings />} />
      </Routes>
    </Router>
    </DateProvider>
  )
}

export default App
