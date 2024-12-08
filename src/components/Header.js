import React, { useState, useEffect } from 'react';
import './Header.css';
import Subheader from './SubHeader'; // Import Subheader

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="main-header">
        <div className="logo">
          <img src="/images/Your_logo.png" alt="System Design Logo" className="logo-icon" />
        </div>
        <h1 className="title">Mental Wellness System</h1>
        <div className="actions">
          <div className="nation-selector">
            <label htmlFor="nation-dropdown" className="nation-label">Select Your Nation:</label>
            <select id="nation-dropdown" className="nation-dropdown">
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="india">India</option>
              <option value="germany">Germany</option>
            </select>
            </div>
          <a href="/Signup" className="subscribe-button" aria-label="Go to Signup page">Subscribe</a>
        </div>
      </div>
      <Subheader />
    </header>
  );
};

export default Header;