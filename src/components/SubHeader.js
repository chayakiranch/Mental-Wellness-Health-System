import React from 'react';
import './SubHeader.css'; // Import Subheader-specific styles

const Subheader = () => {
  return (
    <div className="subheader">
      <div className="subheader-logo">
        <a href="/" className="subheader-logo-link">
          <span className="subheader-title">MINDFUL</span> <span className="subheader-title">MOVES</span>
        </a>
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="dropdown">
            <button className="dropdown-button">About us</button>
            <div className="dropdown-content">
              <a href="/Programmes">Programmes</a>
              <a href="/PublicEngagement">Public Engagement</a>
              <a href="/Research">Research</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Mental Health Assessment</button>
            <div className="dropdown-content">
              <a href="/PublicEngagement">Assessment 1</a>
              <a href="/Programmes">Assessment 2</a>
              <a href="/Research">Assessment 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Resource Center</button>
            <div className="dropdown-content">
              <a href="/Research">Resource 1</a>
              <a href="/PublicEngagement">Resource 2</a>
              <a href="/Programmes">Resource 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Community Forum</button>
            <div className="dropdown-content">
              <a href="/Programmes">Forum 1</a>
              <a href="/Research">Forum 2</a>
              <a href="/PublicEngagement">Forum 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Journaling</button>
            <div className="dropdown-content">
              <a href="/Programmes">Journaling 1</a>
              <a href="/PublicEngagement">Journaling 2</a>
              <a href="/Research">Journaling 3</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropdown-button">Mindfulness & Meditation</button>
            <div className="dropdown-content">
              <a href="/Research">Meditation 1</a>
              <a href="/Programmes">Meditation 2</a>
              <a href="/PublicEngagement">Meditation 3</a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="right-corner">
        <a href="/Profile">Profile</a>
      </div>
    </div>
  );
};

export default Subheader;
