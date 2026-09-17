import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <h4 className="section-subtitle">Testimonials</h4>
        <h2 className="section-title">What's client are say about us</h2>
      </div>

      <div className="testimonial-content">
        <div className="testimonial-image-wrapper">
          <img src="/testimonial_kabir.jpg" alt="Kabir Malhotra" className="testimonial-image" />
        </div>
        <p className="testimonial-text">
          What stood out was their ability to simplify complex tech solutions. Cirrus Infosys made everything easy to understand and manage. Total pros!
        </p>
        <div className="testimonial-rating">
          &#9733; &#9733; &#9733; &#9733; &#9733;
        </div>
        <h4 className="testimonial-author">Kabir Malhotra</h4>
        <p className="testimonial-role">Marketing Lead, UrbanNest Interiors</p>
      </div>
    </section>
  );
}

export default Testimonials;
