import React, { useState } from 'react';

const servicesList = [
  {
    id: '01',
    title: 'Web Development',
    desc: 'At Cirrus Infosys, we are passionate about driving digital transformation for businesses through smart, scalable, and innovative IT solutions. We build highly responsive and robust web applications tailored to your business needs.'
  },
  {
    id: '02',
    title: 'Mobile App Development',
    desc: 'Creating seamless and engaging mobile experiences for iOS and Android platforms using the latest technologies and best practices in the industry.'
  },
  {
    id: '03',
    title: 'Software Solutions',
    desc: 'Custom software solutions tailored to your specific business operations, ensuring high scalability, ironclad security, and peak performance.'
  },
  {
    id: '04',
    title: 'IT Consulting & Cybersecurity',
    desc: 'Expert advice, strategic planning, and top-tier cybersecurity services to help you navigate the complex world of technology and protect your digital assets.'
  }
];

function About() {
  const [activeService, setActiveService] = useState('01');

  return (
    <section className="about-section-new" id="about">
      {/* Top Hero Section */}
      <div className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <img src="/about_us.jpg" alt="About Us Background" className="about-hero-img" />
        <h1 className="about-hero-title">ABOUT US</h1>
      </div>

    </section>
  );
}

export default About;
