import React from 'react';

const blogPosts = [
  {
    title: 'Empowering Digital Growth – Welcome to Cirrus Infosys',
    description: 'We offer a full range of services including custom website development, mobile app creation, cloud integration, cybersecurity solutions, SEO, and digital marketing.',
    image: '/blog_cloud.jpg',
  },
  {
    title: '5 Signs Your Business Needs a Website Redesign',
    description: 'Your website is often the first impression people get of your brand — and in today\'s digital age, that impression has to be fast, clear, and impactful.',
    image: '/blog_meeting.jpg',
  },
  {
    title: 'The Future of IT – 4 Tech Trends to Watch in 2025',
    description: 'Technology is evolving at lightning speed, and businesses must stay ahead to remain competitive. As we look toward 2025, several tech trends are reshaping the IT landscape.',
    image: '/blog_trends.jpg',
  }
];

function Blog() {
  return (
    <section className="blog-section" id="company">
      <div className="services-header blog-header">
        <div className="services-header-left">
          <h4 className="section-subtitle">Insights & Innovation</h4>
          <h2 className="section-title">What's happening in tech? We decode it for you</h2>
        </div>
        <div className="services-header-divider"></div>
        <div className="services-header-right">
          <p className="services-description">
            Welcome to the Cirrus Infosys blog — your go-to hub for all things tech. Explore expert insights, practical tips, and industry trends that help businesses stay ahead in the digital world.
          </p>
          <button className="view-all-btn">
            See More &darr;
          </button>
        </div>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image-wrapper">
              <img src={post.image} alt={post.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-desc">{post.description}</p>
              <button className="explore-btn">Explore &rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
