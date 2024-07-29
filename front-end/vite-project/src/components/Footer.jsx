import React from 'react';
import '../../style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Navigation</h2>
          <a href="/">Home</a>
          <a href="/discover">Discover Caribbean</a>
          <a href="/calendar">Calendar</a>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <a href="mailto:officialsoca@virginia.edu">Email: officialsoca@virginia.edu</a>
          <div className="social-icons">
            <a href="https://www.instagram.com/soca_at_uva?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        All Content Copyright © 2024 University of Virginia SOCA
      </div>
    </footer>
  );
};

export default Footer;
