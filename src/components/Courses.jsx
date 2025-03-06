import React from 'react';
import '../styles/Courses.css';

const Courses = () => {
  return (
    <div className="courses-container">
      <h2>Courses Offered</h2>
      <div className="courses-grid">
        <div className="course-card">
          <img src="/science-icon.png" alt="Science Icon" className="course-icon" />
          <h3>Bachelor of Science (B.Sc.)</h3>
        </div>
        <div className="course-card">
          <img src="/arts-icon.png" alt="Arts Icon" className="course-icon" />
          <h3>Bachelor of Arts (B.A.)</h3>
        </div>
        <div className="course-card">
          <img src="/business-icon.png" alt="Business Icon" className="course-icon" />
          <h3>Bachelor of Business Studies (BBS)</h3>
        </div>
        <div className="course-card">
          <img src="/science-icon.png" alt="Science Icon" className="course-icon" />
          <h3>Master of Science (M.Sc.)</h3>
        </div>
        <div className="course-card">
          <img src="/arts-icon.png" alt="Arts Icon" className="course-icon" />
          <h3>Master of Arts (M.A.)</h3>
        </div>
      </div>
    </div>
  );
};

export default Courses;