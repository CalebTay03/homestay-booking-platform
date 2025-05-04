import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Get In Touch With Us.</h2>
          <p>
            For your property management, design & build services or your business needs.
          </p>
        </div>
        <div className="contact-button">
          <a href="/Contact" className="contact-btn">📩 Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
