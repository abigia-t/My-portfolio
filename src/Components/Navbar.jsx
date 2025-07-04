import React, { useState } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import menu and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="logo-container" onClick={() => window.scrollTo(0, 0)}>
          <span className="logo-text">Abigia</span>
          <div className="logo-highlight"></div>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li className="nav-item"><a href="#about" onClick={toggleMenu}>About Me</a></li>
          <li className="nav-item"><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li className="nav-item"><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li className="nav-item"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>

        <button className="nav-connect" onClick={() => window.scrollTo(0, document.getElementById('contact').offsetTop)}>
          Connect With Me
          <span className="connect-arrow">→</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;