import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services2 from './components/Services2';
import Insights from './components/Insights';
import Team from './components/Team';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Services2 />
      <Insights />
      <Team />
      <Blog />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
