import React, { useState } from 'react';

const insightsList = [
  {
    id: '01',
    title: 'Touchup',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra, lectus ut vulputate sagittis, lorem urna suscipit risus, id pharetra velit quam vel diam. Praesent pretium nunc et lectus congue dignissim. Pellentesque vitae mi nec nibh luctus tempus is non erat.'
  },
  {
    id: '02',
    title: 'Photoshoots',
    desc: 'Professional photoshoots to capture the essence of your brand and create stunning visual narratives for your audience.'
  },
  {
    id: '03',
    title: 'Direction',
    desc: 'Creative direction and visionary planning to guide your marketing campaigns and visual strategies.'
  },
  {
    id: '04',
    title: 'Scenography',
    desc: 'Expertly crafting environments and setting the stage for unforgettable visual storytelling experiences.'
  }
];

function Insights() {
  const [activeItem, setActiveItem] = useState('01');

  return (
    <section className="about-services-dark" id="insights">
      <div className="about-services-left">
        <h4 className="team-role-small" style={{ color: '#ea580c', marginBottom: '1rem' }}>Insights & Innovation</h4>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2', textTransform: 'uppercase' }}>
          What's happening in tech ?<br />We decode it for you
        </h2>
      </div>
      
      <div className="about-services-right">
        {insightsList.map((item) => (
          <div 
            key={item.id} 
            className={`about-accordion-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => setActiveItem(item.id)}
          >
            <div className="about-accordion-header">
              <span className="about-accordion-id">{item.id}</span>
              <span className="about-accordion-title">{item.title}</span>
            </div>
            {activeItem === item.id && (
              <div className="about-accordion-content">
                <p>{item.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Insights;
