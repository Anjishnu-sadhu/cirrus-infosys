import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'Miss. Shanu Mam',
    role: 'Snr. Digital Marketing Expert',
    image: '/team_shanu.jpg',
  },
  {
    name: 'Mrs. Kajal Mam',
    role: 'Co Founder. Of Cirrursinfosys',
    image: '/team_kajal.jpg',
  },
  {
    name: 'Mr. Harvinder Singh',
    role: 'Snr .Net Developer',
    image: '/team_harvinder.jpg',
  },
  {
    name: 'Mr. Gagan Kalra',
    role: 'Snr. Account Manager',
    image: '/team_gagan.jpg',
  },
  {
    name: 'Mr. Aman',
    role: 'Snr. Frontend Designer',
    image: '/team_aman_1.jpg',
  },
  {
    name: 'Mr. Aman Saini',
    role: 'Jnr. ReactJs Developer',
    image: '/team_aman_2.jpg',
  }
];

function Team() {
  const [activeTeam, setActiveTeam] = useState(0);

  return (
    <section className="team-section-dark" id="team">
      <div className="team-header-dark">
        <h2>PROFESSIONAL TEAM</h2>
      </div>

      <div className="team-accordion-container">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`team-accordion-item ${activeTeam === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveTeam(index)}
          >
            <img src={member.image} alt={member.name} className="team-accordion-img" />
            
            <div className="team-accordion-info">
              <span className="team-role-small">{member.role}</span>
              <h3 className="team-name-large">{member.name}</h3>
              <div className="team-socials">
                <span>FB</span>
                <span>TW</span>
                <span>BE</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
