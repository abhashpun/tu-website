import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h2>Welcome to Tribhuvan University</h2>
          <p>
            Tribhuvan University, established in 1959, is the oldest and largest university in Nepal. 
            It offers a wide range of academic programs and is committed to providing quality education.
          </p>
        </div>
        <img src="/campus.jpg" alt="Tribhuvan University Campus" className="hero-image" />
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Tribhuvan University</h2>
        <p>
          Tribhuvan University (TU) is a public university located in Kathmandu, Nepal. It is the oldest and most prestigious university in the country, offering a wide range of undergraduate, graduate, and postgraduate programs. With over 60 constituent campuses and more than 1,000 affiliated colleges, TU is dedicated to providing accessible and quality education to students across Nepal.
        </p>
        <p>
          The university is named after King Tribhuvan, a revered monarch of Nepal, and has played a pivotal role in shaping the nation's educational landscape. TU is committed to fostering innovation, research, and community engagement.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To provide quality education and foster research and innovation that contributes to the development of the nation and the well-being of its people.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To be a leading institution of higher education in South Asia, recognized for academic excellence, research, and community service.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="key-features">
        <h2>Why Choose Tribhuvan University?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/academic-programs.jpeg" alt="Academic Programs" />
            <h3>Diverse Academic Programs</h3>
            <p>
              TU offers a wide range of programs in science, humanities, management, and more.
            </p>
          </div>
          <div className="feature-card">
            <img src="/research.jpg" alt="Research Opportunities" />
            <h3>Research Opportunities</h3>
            <p>
              Students and faculty are encouraged to engage in cutting-edge research.
            </p>
          </div>
          <div className="feature-card">
            <img src="/community.jpg" alt="Community Engagement" />
            <h3>Community Engagement</h3>
            <p>
              TU is committed to serving the community through various outreach programs.
            </p>
          </div>
        </div>
      </div>

      <div className="gallery">
  <h2>Gallery</h2>
  <div className="gallery-grid">
    <img src="/gallery1.jpg" alt="Gallery Image 1" className="gallery-image" />
    <img src="/gallery2.jpg" alt="Gallery Image 2" className="gallery-image" />
    <img src="/gallery3.jpg" alt="Gallery Image 3" className="gallery-image" />
    <img src="/gallery4.jpg" alt="Gallery Image 4" className="gallery-image" />
  </div>
</div>

      {/* Testimonials Section (Optional) */}
      <div className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "Tribhuvan University has provided me with the knowledge and skills to excel in my career. The faculty is highly supportive, and the campus environment is inspiring."
            </p>
            <h4>- Abhash Pun, BCA Graduate</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "The research opportunities at TU are unparalleled. I am grateful for the guidance and resources provided by the university."
            </p>
            <h4>- Aayam Pun, M.A. Student</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;