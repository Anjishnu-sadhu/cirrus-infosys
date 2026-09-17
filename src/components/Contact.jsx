import React from 'react';

function Contact() {
  return (
    <section className="about-services-dark" id="contact" style={{ padding: '6rem 5%' }}>
      <div className="about-services-left" style={{ paddingRight: '4rem' }}>
        <h2 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', textTransform: 'uppercase', marginBottom: '2rem' }}>
          LET'S<br/>CONNECT<br/>WITH CIRRUS<br/>INFOSYS
        </h2>
        <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: '1.6', maxWidth: '450px' }}>
          Whether you have a project in mind, need tech support, or just want to say hello — we're here to help! Fill out the form and our team will get back to you shortly.
        </p>
      </div>
      
      <div className="about-services-right">
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>First Name</label>
              <input type="text" required style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem', color: '#fff', borderRadius: '4px' }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>Last Name</label>
              <input type="text" required style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem', color: '#fff', borderRadius: '4px' }} />
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>Email</label>
            <input type="email" required style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem', color: '#fff', borderRadius: '4px' }} />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>Comment or Message</label>
            <textarea rows="4" style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', padding: '0.8rem', color: '#fff', borderRadius: '4px' }}></textarea>
          </div>
          
          <button 
            type="submit" 
            style={{ 
              background: '#fff', 
              color: '#000', 
              border: 'none', 
              padding: '1rem', 
              fontWeight: 'bold', 
              fontSize: '1rem', 
              borderRadius: '4px', 
              cursor: 'pointer', 
              marginTop: '1rem',
              transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              boxShadow: '0 5px 15px rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = 'translateY(-4px)'; 
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 255, 255, 0.3)'; 
              e.currentTarget.style.background = '#f2f2f2'; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = 'translateY(0)'; 
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.1)'; 
              e.currentTarget.style.background = '#fff'; 
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
