import React from 'react';

function Hero() {
  return (
    <section className="new-hero-section">
      <div className="new-hero-container">

        <div className="new-hero-left">
          <h1 className="new-hero-title">
            Design Better<br />
            <span className="light-text">Faster Smarter</span>
          </h1>
          <p className="new-hero-subtitle">
            I design refined brands, websites, and interfaces for ambitious founders and creative teams.
          </p>
          <div className="partners-logos">
            <div className="logo-item">Google</div>
            <div className="logo-item">Microsoft</div>
            <div className="logo-item">aws</div>
            <div className="logo-item">Meta</div>
            <div className="logo-item">Shopify</div>
            <div className="logo-text">and many more...</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
