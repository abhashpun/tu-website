import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Tribhuvan University Logo" />
        <h1>Tribhuvan University</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/notices">Notices</a></li> 
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;