import React from 'react';
import { Leaf, Users, Heart, Award, TreePine, Recycle } from 'lucide-react';
import "../css/about.css";
import mission from "/image/about-mission.jpg";


export default function About() {

  const values = [
    {
      icon: <Leaf />,
      title: "Preserving Nature",
      description: "We promote eco-friendly tourism that protects Ooty’s lush green hills, forests, and natural beauty."
    },
    {
      icon: <Users />,
      title: "Supporting Local Communities",
      description: "We collaborate with local guides and businesses to ensure tourism benefits the people of Ooty."
    },
    {
      icon: <Heart />,
      title: "Memorable Experiences",
      description: "Our mission is to create unforgettable journeys filled with comfort, culture, and scenic wonders."
    }
  ];

  const achievements = [
    { number: '30+', label: 'Tour Packages' },
    { number: '2K+', label: 'Happy Tourists' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ];

  const team = [
    {
      name: 'Yogesh',
      role: 'Founder & Travel Expert',
      image: '',
      description: 'Passionate entrepreneur dedicated to showcasing the best of Ooty tourism.'
    },
    {
      name: 'Suresh',
      role: 'Tour Coordinator',
      image: '',
      description: 'Expert in planning smooth and enjoyable tour experiences.'
    },
    {
      name: 'Surya',
      role: 'Local Guide',
      image: '',
      description: 'Born and raised in Ooty with deep knowledge of local attractions.'
    }
  ];

  const certifications = [
    { icon: <Award />, title: 'Trusted Tour Operator' },
    { icon: <TreePine />, title: 'Eco-Friendly Practices' },
    { icon: <Recycle />, title: 'Sustainable Tourism' },
    { icon: <Leaf />, title: 'Nature Protection' }
  ];

  return (
    <div className="about-page">
      <div className="container">

        {/* Intro Section */}
        <div className="section-text">
          <h2 className="heading-large">About Ooty Tours</h2>
          <p className="text-gray">
            Ooty Tours is your trusted partner for exploring the breathtaking beauty of the Queen of Hills. 
            We specialize in curated travel experiences that combine adventure, comfort, and nature.
          </p>
        </div>

        {/* Mission Section */}
        <div className="card section mission-card">
          <div className="mission-content">
            <h2 className="heading-xl">Our Mission</h2>
            <p className="text-lg">
             Ooty Tours was founded on the belief that travelers must explore, because life is short and the world is huge. 
             We are dedicated to creating authentic and memorable journeys that allow people to experience the true beauty of Ooty while preserving 
             its natural charm. Our goal is to ensure every trip is peaceful, safe, and deeply enriching.
            </p>
            <p className="text-lg">
              From endless tea gardens to mist-covered mountains, we inspire travelers to embrace adventure, discover new perspectives, 
              and connect with the scenic soul of Ooty — because every journey adds meaning to life.
            </p>
          </div>
          <div className="mission-image-container">
            <img src={mission} alt="Ooty Hills" className="mission-image" />
          </div>
        </div>

        {/* Core Values */}
        <div className="section text-center">
          <h2 className="heading-xl">Our Core Values</h2>
          <p>The principles that define our service quality</p>
          <div className="grid grid-3">
            {values.map((v, idx) => (
              <div key={idx} className="card">
                <div className="icon">
                  {React.cloneElement(v.icon, { size: 64 })}
                </div>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="section achievements">
          <h2 className="heading-xl text-center">Our Achievements</h2>
          <p className="heading-l text-center">Milestones that reflect our journey</p>
          <div className="grid grid-4">
            {achievements.map((a, idx) => (
              <div key={idx} className="achievement-card">
                <h3>{a.number}</h3>
                <p>{a.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="section text-center">
          <h2 className="heading-xl">Meet Our Team</h2>
          <div className="grid grid-3">
            {team.map((member, idx) => (
              <div key={idx} className="card">
                {member.image && <img src={member.image} alt={member.name} />}
                <h3>{member.name}</h3>
                <p className="text-emerald">{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="section text-center">
          <h2 className="heading-xl">Why Choose Ooty Tours?</h2>
          <div className="grid grid-4">
            {certifications.map((c, idx) => (
              <div key={idx} className="card">
                <div className="icon">
                  {React.cloneElement(c.icon, { size: 64 })}
                </div>
                <h3>{c.title}</h3>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
