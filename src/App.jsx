import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBed from './assets/components/rooms/SingleBed.jsx'
import Home from './assets/components/welcome/Home.jsx';
import About from './assets/components/welcome/About.jsx';
import Contact from './assets/components/welcome/Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<SingleBed />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

  )
}

export default App
