import React, { useState } from 'react';

const blogPosts = [
  {
    id: '01',
    title: 'Empowering Digital Growth – Welcome to Cirrus Infosys',
    description: 'We offer a full range of services including custom website development, mobile app creation, cloud integration, cybersecurity solutions, SEO, and digital marketing.',
    image: '/blog_cloud.jpg',
  },
  {
    id: '02',
    title: '5 Signs Your Business Needs a Website Redesign',
    description: 'Your website is often the first impression people get of your brand — and in today\'s digital age, that impression has to be fast, clear, and impactful.',
    image: '/blog_meeting.jpg',
  },
  {
    id: '03',
    title: 'The Future of IT – 4 Tech Trends to Watch in 2025',
    description: 'Technology is evolving at lightning speed, and businesses must stay ahead to remain competitive. As we look toward 2025, several tech trends are reshaping the IT landscape.',
    image: '/blog_trends.jpg',
  }
];

function Blog() {
  const [activeBlog, setActiveBlog] = useState('01');

  return (
    <section className="about-services-dark" id="blog">
      <div className="about-services-left">
        <h4 className="team-role-small" style={{ color: '#ea580c', marginBottom: '1rem' }}>Insights & Innovation</h4>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', textTransform: 'uppercase' }}>
          WHAT'S HAPPENING<br />IN TECH? WE<br />DECODE IT<br />FOR YOU
        </h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6', marginTop: '2rem', maxWidth: '400px' }}>
          Welcome to the Cirrus Infosys blog — your go-to hub for all things tech. Explore expert insights, practical tips, and industry trends that help businesses stay ahead in the digital world.
        </p>
      </div>

      <div className="about-services-right">
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className={`about-accordion-item ${activeBlog === post.id ? 'active' : ''}`}
            onClick={() => setActiveBlog(post.id)}
          >
            <div className="about-accordion-header">
              <span className="about-accordion-id">{post.id}</span>
              <span className="about-accordion-title">{post.title}</span>
            </div>
            {activeBlog === post.id && (
              <div className="about-accordion-content">
                <p>{post.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
