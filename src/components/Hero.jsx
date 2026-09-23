import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOut * end));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

function Hero() {
  return (
    <section className="light-hero-section">
      <div className="hero-background-image"></div>
      {/* Decorative circle top left */}
      <div className="hero-decoration-circle-top"></div>
      
      <div className="light-hero-container">
        
        {/* Main Content */}
        <div className="hero-main-content">
          
          {/* Left Text Side */}
          <div className="hero-left-col">
            <div className="hero-tagline">
              IT SOLUTIONS FOR A BRIGHTER TOMORROW
              <span className="tagline-line"></span>
            </div>
            
            <h1 className="hero-title">
              BUILDING DIGITAL<br />
              SOLUTIONS THAT<br />
              DRIVE <span className="highlight-orange">REAL GROWTH</span>
            </h1>
            
            <p className="hero-subtitle">
              We are Cirrus Infosys — a full-service IT agency crafting powerful<br />
              web, mobile, and software solutions for modern businesses.<br />
              From idea to impact, we build what's next.
            </p>
            
            <div className="hero-buttons">
              <a href="#consult" className="btn-solid-orange">
                Get a Consult &rarr;
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <h3><AnimatedNumber end={100} suffix="+" /></h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item border-left">
                <h3><AnimatedNumber end={250} suffix="+" /></h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-item border-left">
                <h3><AnimatedNumber end={5} suffix="+" /></h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-item border-left">
                <h3><AnimatedNumber end={24} suffix="/7" /></h3>
                <p>Support</p>
              </div>
            </div>
            
            <div className="scroll-indicator">
              <span className="scroll-line"></span>
              <span>SCROLL TO EXPLORE &darr;</span>
            </div>
          </div>
          
          {/* Right Image Side */}
          <div className="hero-right-col">
            
            <div className="hero-bg-text-watermark">
              IDEAS<br/>
              TECHNOLOGY<br/>
              PEOPLE<br/>
              IMPACT
            </div>

            <div className="hero-image-wrapper">
              
              {/* Floating Cards */}
              <div className="floating-card card-1">
                <div className="card-icon web-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div className="card-content">
                  <strong>Modern Web Apps</strong>
                  <span>Scalable & Secure</span>
                </div>
              </div>
              
              <div className="floating-card card-2">
                <div className="card-icon mobile-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <div className="card-content">
                  <strong>Mobile Solutions</strong>
                  <span>User-Centric Design</span>
                </div>
              </div>
              
              <div className="floating-card card-3">
                <div className="card-icon cloud-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                </div>
                <div className="card-content">
                  <strong>Cloud & DevOps</strong>
                  <span>Reliable Infrastructure</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Partners Logos */}
        <div className="hero-partners">
          <div className="partners-title-container">
             <span className="partners-line"></span>
             <span className="partners-title">TRUSTED BY BUSINESSES WORLDWIDE</span>
             <span className="partners-line"></span>
          </div>
          <div className="partners-logos">
             {/* Using simple text placeholders for logos as per design if SVGs aren't available */}
             <div className="partner-logo">stripe</div>
             <div className="partner-logo"><span style={{marginRight:'5px'}}>#</span>slack</div>
             <div className="partner-logo">shopify</div>
             <div className="partner-logo">Microsoft</div>
             <div className="partner-logo">Google</div>
             <div className="partner-logo"><span style={{marginRight:'5px', border:'1px solid #666', padding:'0 2px', borderRadius:'2px'}}>N</span>Notion</div>
          </div>
        </div>

      </div>
      
      {/* Decorative circle bottom right */}
      <div className="hero-decoration-circle-bottom"></div>
    </section>
  );
}

export default Hero;
