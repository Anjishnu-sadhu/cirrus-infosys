import React from 'react';

const servicesData = [
  {
    number: '01',
    title: 'Brand Strategy',
    tags: ['Development', 'Brand Guidelines', 'Analysis', 'Rebranding Services']
  },
  {
    number: '02',
    title: 'Web Design',
    tags: ['Development', 'Custom Website', 'Web Solutions', 'Responsive Web']
  },
  {
    number: '03',
    title: 'Digital Marketing',
    tags: ['Email Marketing', 'Pay-Per-Click', 'SEO', 'Social Media Marketing']
  },
  {
    number: '04',
    title: 'UI/UX Design',
    tags: ['User Interface (UI)', 'Wireframing', 'Analysis', 'Mobile App UI Design']
  },
  {
    number: '05',
    title: 'Software Development',
    tags: ['Custom Software', 'API Integration', 'Enterprise Solutions', 'Maintenance']
  },
  {
    number: '06',
    title: 'Cloud Solutions',
    tags: ['AWS / Azure', 'Cloud Migration', 'Serverless', 'DevOps']
  }
];

function Services() {
  return (
    <section className="services-section-dark" id="service">
      <div className="services-header-dark">
        <h2 className="section-title-dark">
          Services that<br/>
          <span className="italic-gradient">are tailored</span>
        </h2>
      </div>

      <div className="services-grid-dark">
        {servicesData.map((service, index) => (
          <div className="service-card-dark" key={index}>
            <div className="service-card-number">{service.number}</div>
            <h3 className="service-card-title">{service.title}</h3>
            
            <div className="service-tags">
              {service.tags.map((tag, tagIndex) => (
                <span className="service-tag" key={tagIndex}>{tag}</span>
              ))}
            </div>
            
            <button className="service-add-btn">+</button>
            <div className="service-card-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
