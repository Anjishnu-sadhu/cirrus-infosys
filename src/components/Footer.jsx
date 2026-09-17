import React from 'react';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand & Contact Info */}
        <div className="footer-column brand-column">
          <div className="footer-logo">
            <h2>Cirrus</h2>
            <p>I N F O S Y S</p>
          </div>
          <ul className="footer-contact-list">
            <li>
              <span className="icon">&#10148;</span>
              <span>Office no. 52, 9th Floor, <br/>Sushma Infinium, Zirakpur</span>
            </li>
            <li>
              <span className="icon">&#9993;</span>
              <span>cirrusinfosys169@gmail.com</span>
            </li>
            <li>
              <span className="icon">&#9742;</span>
              <span>+91 734 724 2734</span>
            </li>
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="footer-column links-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        {/* Social Links */}
        <div className="footer-column social-column">
          <h3 className="footer-heading">Social Links</h3>
          <ul className="footer-socials">
            <li><a href="#"><span className="icon">&#120295;</span> Twitter</a></li>
            <li><a href="#"><span className="icon">&#128247;</span> Instagram</a></li>
            <li><a href="#"><span className="icon">&#128188;</span> Linkedin</a></li>
            <li><a href="#"><span className="icon">&#128101;</span> Facebook</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Cirrusinfosis All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
