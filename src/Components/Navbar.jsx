import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="logo-container">
          <span className="logo-text">Abigia</span>
          <div className="logo-highlight"></div>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">About Me</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
        
        <button className="nav-connect">
          Connect With Me
          <span className="connect-arrow">→</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;