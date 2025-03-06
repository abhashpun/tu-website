import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Tribhuvan University</h1>
        <p>
          Tribhuvan University (TU) is the oldest and most prestigious university in Nepal, dedicated to providing quality education and fostering innovation.
        </p>
      </div>

      {/* History Section */}
      <div className="about-section">
        <h2>Our History</h2>
        <p>
          Tribhuvan University was established in 1959 and is named after King Tribhuvan, a revered monarch of Nepal. It started with a handful of colleges and has now grown into a vast network of over 60 constituent campuses and more than 1,000 affiliated colleges.
        </p>
        <p>
          Over the decades, TU has played a pivotal role in shaping Nepal's educational landscape, producing graduates who have gone on to become leaders in various fields.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We strive for academic and research excellence in all our programs.
            </p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              We uphold the highest standards of integrity and ethics in all our activities.
            </p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We encourage creativity and innovation in teaching, learning, and research.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>50,000+ Graduates</h3>
            <p>
              Over 50,000 students graduate from TU every year, contributing to the nation's development.
            </p>
          </div>
          <div className="achievement-card">
            <h3>100+ Research Papers</h3>
            <p>
              Our faculty and students publish over 100 research papers annually in international journals.
            </p>
          </div>
          <div className="achievement-card">
            <h3>Top Rankings</h3>
            <p>
              TU is consistently ranked as one of the top universities in Nepal and South Asia.
            </p>
          </div>
        </div>
      </div>

      {/* Campus Life Section */}
      <div className="campus-life">
        <h2>Campus Life</h2>
        <p>
          Life at Tribhuvan University is vibrant and diverse. Our campuses offer a wide range of extracurricular activities, clubs, and events that enrich the student experience.
        </p>
        <div className="campus-gallery">
          <img src="/campus1.webp" alt="Campus Life 1" />
          <img src="/campus2.jpg" alt="Campus Life 2" />
          <img src="/campus3.jpg" alt="Campus Life 3" />
        </div>
      </div>
    </div>
  );
};

export default About;