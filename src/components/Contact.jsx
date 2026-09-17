import React from 'react';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="section-title">Contact With Us</h2>
      </div>
      
      <div className="contact-container">
        <div className="contact-form-side">
          <h3 className="contact-subtitle">Let's Connect with Cirrus Infosys</h3>
          <p className="contact-desc">
            Whether you have a project in mind, need tech support, or just want to say hello — we're here to help! Fill out the form and our team will get back to you shortly.
          </p>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group name-group">
              <label>Name <span>*</span></label>
              <div className="name-inputs">
                <div className="input-with-sub">
                  <input type="text" required />
                  <span className="sub-label">First</span>
                </div>
                <div className="input-with-sub">
                  <input type="text" required />
                  <span className="sub-label">Last</span>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label>Email <span>*</span></label>
              <input type="email" required className="full-width" />
            </div>
            
            <div className="form-group">
              <label>Comment or Message</label>
              <textarea rows="6" className="full-width"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        
        <div className="contact-image-side">
          <img src="/contact_team.jpg" alt="Team meeting" className="contact-image" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
