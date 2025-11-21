import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import image from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="navbar-left">
        <img
          src={image}
          alt="logo"
          style={{ width: "90px", height: "64px", cursor: "pointer" }}
          onClick={() => {
            navigate("/home");
          }}
        />
        <div className="brand">
          <h1 className="brand-title">Ooty Tours</h1>
          <p className="brand-subtitle">Hill Station Adventures</p>
        </div>
      </div>

      {/* Hamburger (Mobile only) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <NavLink to="/home" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/activity" className="nav-link" onClick={() => setMenuOpen(false)}>
          Activity
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
