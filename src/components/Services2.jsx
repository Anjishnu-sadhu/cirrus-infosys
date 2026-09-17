import React from 'react';

const gridServices = [
  { title: 'Web Development', desc: 'Custom websites and web applications designed to elevate your brand.' },
  { title: 'Software Development', desc: 'Tailored software solutions for streamlined operations.' },
  { title: 'Cloud Solutions', desc: 'Scalable and secure cloud computing services' },
  { title: 'IT Consulting', desc: 'Expert guidance to optimize your technology and drive smart business growth.' },
  { title: 'Cybersecurity', desc: 'Protecting your digital assets with advanced security solutions and proactive threat prevention.' },
  { title: 'Blockchain Development', desc: 'Secure, transparent, and decentralized solutions powered by advanced blockchain technology..' },
  { title: 'Iphone 17', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' }
];

function Services2() {
  return (
    <section className="about-services-dark" id="services2">
      <div className="about-services-left">
        <h2 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2', textTransform: 'uppercase' }}>
          WE PROVIDE VARIOUS<br/>SERVICES
        </h2>
      </div>
      
      <div className="about-services-right">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '3rem 2rem' 
        }}>
          {gridServices.map((item, index) => (
            <div 
              key={index} 
              className="grid-service-item"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                e.currentTarget.style.borderColor = 'rgba(234, 88, 12, 0.5)'; // Accent color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: '#fff' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#aaa', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services2;
