import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="c-site-footer">
      <div className="c-site-footer--top">
        <div className="c-site-footer-top__inner">
          {/* About Section - Left aligned */}
          <div className="menu--about">
            <h2>About</h2>
            <p>
              A Comprehensive Mental Health Support Website Providing Resources, Online Counseling, And Educational Materials To Promote Emotional Well-Being. Accessible, User-Friendly Interface Ensures Individuals Find The Help They Need, Fostering A Supportive Online Community.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Info Section - Centered */}
          <div className="menu--contact">
            <h2>Contact Info</h2>
            <p>📍 Lal Kua, Ghaziabad</p>
            <p>📞 +91 8865001088</p>
            <p>✉️ mindfulmoves2024@gmail.Com</p>
          </div>

          {/* Quick Links Section - Right side */}
          <div className="menu--quick-links">
            <h2>Quick Links</h2>
            <ul className="menu">
              <li className="menu-item"><a href="/">Home</a></li>
              <li className="menu-item"><a href="/about">About</a></li>
              <li className="menu-item"><a href="/services">Services</a></li>
              <li className="menu-item"><a href="/news">News</a></li>
              <li className="menu-item"><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="c-site-footer-logo">
        <p>&copy; 2024 MINDFUL MOVES</p>
      </div>
    </footer>
  );
};

export default Footer;
