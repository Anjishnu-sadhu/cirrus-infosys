import React from 'react';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text-side">
          <div className="badge">
            <span role="img" aria-label="rocket">🚀</span> YOUR TECHNOLOGY PARTNER
          </div>
          <h1 className="hero-title">
            Empowering<br/>Businesses with<br/>
            <span className="highlight-text">Cutting-Edge</span><br/>
            IT Solutions
          </h1>
          <p className="hero-subtitle">
            Cirrus Infosys delivers innovative web development, software solutions, and IT consulting to help your business grow in the digital world.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Get Started &rarr;
            </button>
            <button className="btn-secondary">
              <span className="play-icon">▶</span> Our Services
            </button>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <div className="icon-wrapper purple">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
              </div>
              <span>Custom<br/>Solutions</span>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper blue">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
              </div>
              <span>On-Time<br/>Delivery</span>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper green">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
              </div>
              <span>Expert<br/>Team</span>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper orange">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
              </div>
              <span>Ongoing<br/>Support</span>
            </div>
          </div>
        </div>
        <div className="hero-image-side">
          <img src="/17b5ae9a-2d6b-413f-ae15-cdc57066c09d.png" alt="IT Solutions" className="hero-illustration" />
        </div>
      </div>
      
      <div className="partners-section">
        <p className="partners-title">TRUSTED BY BUSINESSES ACROSS INDUSTRIES</p>
        <div className="partners-logos">
          <div className="logo-item">Google</div>
          <div className="logo-item">Microsoft</div>
          <div className="logo-item">aws</div>
          <div className="logo-item">Meta</div>
          <div className="logo-item">Shopify</div>
          <div className="logo-text">and many more...</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
