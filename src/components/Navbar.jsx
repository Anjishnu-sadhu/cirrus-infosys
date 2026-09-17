import React from 'react';

const NavLink = ({ href, children, isActive }) => {
  return (
    <li>
      <a 
        href={href} 
        className={isActive ? "active" : ""}
        style={{
          display: 'inline-block',
          transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.color = '#ea580c';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.color = '';
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }}
      >
        {children}
      </a>
    </li>
  );
};

function Navbar() {
  return (
    <nav className="navbar new-navbar" style={{ maxWidth: '100%' }}>
      <div className="logo-container">
        <div 
          className="new-logo" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            transition: 'transform 0.4s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
            src="/Screenshot_2026-09-17_163646-removebg-preview.png"
            alt="Cirrus Logo Icon"
            style={{ height: '40px', objectFit: 'contain' }}
          />
          <img
            src="/Screenshot_2026-09-17_163447-removebg-preview.png"
            alt="Cirrus Logo Text"
            style={{ height: '40px', objectFit: 'contain' }}
          />
        </div>
      </div>
      <ul className="new-nav-links">
        <NavLink href="#" isActive={true}>Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#article">Article</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </ul>
      <div className="nav-actions">
        <a 
          href="#start" 
          className="start-project-btn"
          style={{
            transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(234, 88, 12, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Start a project
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
