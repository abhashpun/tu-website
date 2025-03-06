import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your email" />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Enter your message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;