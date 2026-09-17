import React from 'react';

function CTA() {
  return (
    <section className="about-services-dark" id="cta">
      <div className="about-services-left">
        <h4 className="team-role-small" style={{ color: '#ea580c', marginBottom: '1rem' }}>Get Started</h4>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', textTransform: 'uppercase' }}>
          READY TO TAKE<br />THE FIRST STEP?
        </h2>
      </div>

      <div className="about-services-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ color: '#aaa', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '500px' }}>
          Your journey to recovery starts today. Let us guide you toward a healthier, happier future.
        </p>
        <button style={{ 
          padding: '1rem 2.5rem', 
          background: '#ea580c', 
          color: '#fff', 
          fontSize: '1.1rem', 
          fontWeight: '700', 
          border: 'none', 
          borderRadius: '30px', 
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          width: 'fit-content',
          transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
          boxShadow: '0 10px 20px rgba(234, 88, 12, 0.3)'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(234, 88, 12, 0.5)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(234, 88, 12, 0.3)' }}
        >
          Get a Consult
        </button>
      </div>
    </section>
  );
}

export default CTA;
