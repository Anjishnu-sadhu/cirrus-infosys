import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper component for nav links
  const NavLink = ({ href, children, isActive }) => (
    <li>
      <a href={href} className={`nav-item-link ${isActive ? 'active' : ''}`}>
        {children}
        {isActive && <span className="nav-dot"></span>}
      </a>
    </li>
  );

  const NavDropdown = ({ title, items }) => {
    return (
      <li className="nav-item-dropdown">
        <span className="nav-item-link">
          {title}
          <svg style={{marginLeft: '4px', marginTop: '2px'}} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
        <div className="dropdown-menu">
          <ul>
            {items.map((item, index) => (
              <li key={index} className={item.subItems ? "has-submenu" : ""}>
                <a href={`#${item.label.toLowerCase().replace(/ /g, '-')}`}>
                  {item.label}
                  {item.subItems && <svg style={{marginLeft: 'auto'}} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>}
                </a>
                {item.subItems && (
                  <div className="sub-dropdown-menu">
                    <ul>
                      {item.subItems.map((sub, idx) => (
                         <li key={idx}><a href={`#${sub.toLowerCase().replace(/ /g, '-')}`}>{sub}</a></li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };

  return (
    <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src="/62c249aa-a356-4182-abbb-497a1645be45-removebg-preview.png" alt="Cirrus Infosys Logo" style={{ height: '60px' }} />
        <img src="/fcc98efb-9f15-4914-9550-8d1fbc7d9ff0-removebg-preview.png" alt="Cirrus Infosys Text" style={{ height: '44px' }} />
      </div>

      <div className="mobile-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#about">About Us</NavLink>
        <NavDropdown title="Services" items={[
          {
            label: 'MLM Software', 
            subItems: ['Binary plan', 'Matrix plan', 'ROI plan', 'Level plan', 'Crowd funding', 'Crypto software']
          }, 
          { 
            label: 'Digital Marketing',
            subItems: ['SEO', 'Social media marketing', 'Meta Ads', 'Google Ads', 'Lead generation', 'Whatsapp marketing', 'Sms & text Message marketing', 'RCS marketing', 'Content marketing', 'Email marketing', 'Performance tracking']
          }
        ]} />
        <NavLink href="#blog">Blog</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </ul>
      
      <div className="nav-actions">
        <a href="#consult" className="btn-outline-orange">
          Get a Consult <span className="arrow-right">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
