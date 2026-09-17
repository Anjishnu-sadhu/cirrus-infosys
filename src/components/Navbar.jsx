import React from 'react';

function Navbar() {
  return (
    <nav className="navbar new-navbar">
      <div className="logo-container">
        <div className="new-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img 
            src="/Screenshot_2026-09-17_163447-removebg-preview.png" 
            alt="Cirrus Logo Icon" 
            style={{ height: '40px', objectFit: 'contain' }} 
          />
          <img 
            src="/Screenshot_2026-09-17_163646-removebg-preview.png" 
            alt="Cirrus Logo Text" 
            style={{ height: '40px', objectFit: 'contain' }} 
          />
        </div>
      </div>
      <ul className="new-nav-links">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#article">Article</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-actions">
        <a href="#start" className="start-project-btn">
          Start a project
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
