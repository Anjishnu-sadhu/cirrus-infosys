import React from 'react';

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        style={{
          color: '#888',
          textDecoration: 'none',
          fontSize: '0.95rem',
          transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'translateX(8px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#888';
          e.currentTarget.style.transform = 'translateX(0)';
        }}
      >
        {children}
      </a>
    </li>
  );
};

function Footer() {
  return (
    <footer style={{ background: '#222', padding: '2rem' }}>
      <div style={{
        background: '#0a0a0a',
        borderRadius: '40px',
        padding: '5rem 4rem 0 4rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative'
      }}>

        {/* Top Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', marginBottom: '6rem' }}>

          {/* Brand Info */}
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <img src="/Screenshot_2026-09-17_163646-removebg-preview.png" alt="Cirrus Logo Icon" style={{ height: '60px', filter: 'brightness(0) invert(1)' }} />
              <img src="/Screenshot_2026-09-17_163447-removebg-preview.png" alt="Cirrus Infosys Text" style={{ height: '44px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.6' }}>
              Cirrus Infosys is a full-service IT agency specializing in custom web, mobile, and software solutions for modern businesses.
            </p>
          </div>

          {/* Links Grid */}
          <div style={{ flex: '2', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick link</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#">About us</FooterLink>
                <FooterLink href="#">Contact us</FooterLink>
                <FooterLink href="#">License</FooterLink>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <FooterLink href="#">Service</FooterLink>
                <FooterLink href="#">Service details</FooterLink>
                <FooterLink href="#">Project</FooterLink>
                <FooterLink href="#">Project details</FooterLink>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Others</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Blog details</FooterLink>
                <FooterLink href="#">404</FooterLink>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Social</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">LinkedIn</FooterLink>
                <FooterLink href="#">Instagram</FooterLink>
                <FooterLink href="#">Twitter</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', color: '#888', fontSize: '0.9rem', marginBottom: '4rem' }}>
          <p>&copy;2025 Cirrus Infosys All rights reserved.</p>
          <p>Design by Anjishnu Sadhu - Powered by Cirrus Infosys</p>
        </div>

        {/* Massive Bottom Text */}
        <div style={{
          textAlign: 'center',
          width: '100%',
          position: 'relative',
          marginBottom: '-2rem' // To push it slightly off bottom like the image
        }}>
          <h1 style={{
            fontSize: '18vw',
            fontWeight: '900',
            lineHeight: '0.8',
            margin: 0,
            padding: 0,
            background: 'linear-gradient(to right, #0a0a0a 0%, #f97316 20%, #ea580c 50%, #c2410c 80%, #0a0a0a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            letterSpacing: '-2px',
            transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
            cursor: 'default'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)';
              e.currentTarget.style.letterSpacing = '5px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.letterSpacing = '-2px';
            }}
          >
            CIRRUS
          </h1>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
