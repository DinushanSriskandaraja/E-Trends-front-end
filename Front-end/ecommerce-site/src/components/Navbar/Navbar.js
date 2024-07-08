// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaUser } from "react-icons/fa"; // Import FaUser icon from react-icons/fa

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {" "}
        {/* Placeholder for logo */}{" "}
        {/* Replace 'YourLogo.png' with actual logo once designed */}{" "}
        {/* <img src="YourLogo.png" alt="Logo" className="logo" /> */}
        {/* Donation button */}{" "}
        <Link to="/donation" className="donation-btn">
          {" "}
          Donate{" "}
        </Link>{" "}
      </div>
      {/* Center-aligned main links */}{" "}
      <div className="navbar-center">
        <Link to="/" className="nav-link">
          {" "}
          Home{" "}
        </Link>{" "}
        <Link to="/about" className="nav-link">
          {" "}
          About{" "}
        </Link>{" "}
        <Link to="/categories" className="nav-link">
          {" "}
          Categories{" "}
        </Link>{" "}
      </div>
      {/* User icon on the right */}{" "}
      <div className="navbar-right">
        <Link to="/profile" className="user-icon">
          {" "}
          <FaUser />{" "}
        </Link>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
