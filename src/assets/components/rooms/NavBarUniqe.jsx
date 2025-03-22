import React from "react";
import { Link } from "react-router-dom";
import "./NavBarUnique.css"; 
const NavBarUnique = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/singlebed">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBarUnique;
