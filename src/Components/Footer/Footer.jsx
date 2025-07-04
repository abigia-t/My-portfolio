import React from 'react';
import './Footer.css';
import { FaUser } from 'react-icons/fa'; // Import the user icon

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <span className="logo-text">Abigia</span>
          <p>I am a fullstack developer from Addis Ababa with experience.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUser size={20} style={{ marginRight: '8px' }} />
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="footer-subscribe">
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <hr /> {/* Keep the horizontal line to separate sections */}
      <div className="footer-bottom">
        {/* <p className="footer-bottom-left">© 2025 Abigia Tarekegn. All rights reserved.</p> */}
        <div className="footer-bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
                <p className="footer-bottom-left">© 2025 Abigia Tarekegn. All rights reserved.</p>

      </div>
    </div>
  );
};

export default Footer;