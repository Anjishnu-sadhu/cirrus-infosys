import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    company: 'SparkMedia',
    title: 'Exceeded All Expectations!',
    quote: 'From start to finish, the team delivered exceptional service. The animations brought our vision to life and surpassed anything we imagined.',
    author: 'Vidhran K., CEO',
    image: '/testimonial_kabir.jpg'
  },
  {
    id: 2,
    company: 'Vivid Works',
    title: 'Reliable and Innovative',
    quote: 'They completely transformed how we operate. Couldn\'t be happier with the results! The team is extremely reliable.',
    author: 'Tim S., Manager',
    image: '/team_aman_1.jpg'
  },
  {
    id: 3,
    company: 'Nexus Corp',
    title: 'Outstanding Delivery',
    quote: 'The level of professionalism and creativity they bring is unmatched in the industry. We saw immediate ROI.',
    author: 'Sarah J., Director',
    image: '/team_shanu.jpg'
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="about-services-dark" id="testimonials" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '6rem 0', overflow: 'hidden' }}>
      <div style={{ marginBottom: '4rem', maxWidth: '800px', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff' }}>
          Hear from Brands<br/>That Trust Us
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#aaa', fontWeight: '400', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
          Our clients' success stories showcase the value we bring to every project. Here's what they have to say about working with us.
        </p>
      </div>

      <div style={{ 
        width: '100%', 
        overflow: 'hidden', 
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          gap: '2rem',
          transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
          // 850px (card width) + 32px (gap) = 882px
          transform: `translateX(calc(50vw - 425px - ${currentIndex * 882}px))`
        }}>
          {testimonialsData.map((item, index) => {
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                style={{ 
                  flexShrink: 0,
                  width: '850px',
                  height: '400px',
                  background: isActive ? 'linear-gradient(145deg, rgba(35,35,35,0.8), rgba(15,15,15,0.9))' : 'rgba(20,20,20,0.5)', 
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px', 
                  border: isActive ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
                  display: 'flex', 
                  overflow: 'hidden',
                  opacity: isActive ? 1 : 0.4,
                  transform: isActive ? 'scale(1.02)' : 'scale(0.92)',
                  boxShadow: isActive ? '0 25px 50px rgba(0,0,0,0.8)' : 'none',
                  transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
                  cursor: 'pointer'
                }}
              >
                {/* Left Text Content */}
                <div style={{ flex: '1', padding: '3.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill={isActive ? '#fff' : '#666'}><path d="M12 2L15 9l7 1-5 5 1 7-7-4-7 4 1-7-5-5 7-1z"/></svg>
                    <span style={{ color: isActive ? '#fff' : '#666', fontSize: '1.2rem', fontWeight: '600' }}>{item.company}</span>
                  </div>
                  
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: isActive ? '#fff' : '#888', marginBottom: '1rem', transition: 'color 0.5s ease' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '1.1rem', color: isActive ? '#ccc' : '#666', lineHeight: '1.6', marginBottom: '2.5rem', transition: 'color 0.5s ease' }}>
                    "{item.quote}"
                  </p>
                  
                  <p style={{ fontSize: '1rem', color: isActive ? '#999' : '#555', transition: 'color 0.5s ease' }}>{item.author}</p>
                </div>

                {/* Right Image Content */}
                <div style={{ flex: '1', padding: '1rem', display: 'flex' }}>
                  <img 
                    src={item.image} 
                    alt={item.author} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      borderRadius: '16px', 
                      filter: 'grayscale(100%)',
                      opacity: isActive ? 1 : 0.1,
                      transition: 'opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1)'
                    }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem' }}>
        <button 
          onClick={handlePrev}
          style={{ 
            width: '56px', height: '56px', borderRadius: '50%', 
            background: currentIndex === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.08)', 
            backdropFilter: 'blur(10px)',
            border: currentIndex === 0 ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,255,255,0.15)', 
            color: currentIndex === 0 ? '#555' : '#fff', 
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            transition: 'all 0.3s ease',
            transform: currentIndex === 0 ? 'scale(1)' : 'scale(1.05)'
          }}
          onMouseEnter={(e) => { if(currentIndex !== 0) e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
          onMouseLeave={(e) => { if(currentIndex !== 0) e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          onClick={handleNext}
          style={{ 
            width: '56px', height: '56px', borderRadius: '50%', 
            background: currentIndex === testimonialsData.length - 1 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.08)', 
            backdropFilter: 'blur(10px)',
            border: currentIndex === testimonialsData.length - 1 ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,255,255,0.15)', 
            color: currentIndex === testimonialsData.length - 1 ? '#555' : '#fff', 
            cursor: currentIndex === testimonialsData.length - 1 ? 'not-allowed' : 'pointer', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            transition: 'all 0.3s ease',
            transform: currentIndex === testimonialsData.length - 1 ? 'scale(1)' : 'scale(1.05)'
          }}
          onMouseEnter={(e) => { if(currentIndex !== testimonialsData.length - 1) e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
          onMouseLeave={(e) => { if(currentIndex !== testimonialsData.length - 1) e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
