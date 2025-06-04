import React, { useState, useEffect } from 'react';
import '../styles/Notices.css';

const Notices = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch a random quote from Quotes REST API
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="notices-container">
      <h1>Notices</h1>
      <div className="notices-grid">
        {/* Notice Cards */}
        <div className="notice-card">
          <h3>Admission Open for 2023</h3>
          <p className="notice-date">2023-10-01</p>
          <p className="notice-description">
            Admissions for the academic year 2023 are now open. Apply online before October 30, 2023.
          </p>
        </div>
        <div className="notice-card">
          <h3>Scholarship Application Deadline</h3>
          <p className="notice-date">2023-10-15</p>
          <p className="notice-description">
            The last date to apply for scholarships is October 15, 2023. Submit your applications online.
          </p>
        </div>
        <div className="notice-card">
          <h3>Semester Exam Schedule</h3>
          <p className="notice-date">2023-11-01</p>
          <p className="notice-description">
            The schedule for the upcoming semester exams has been published. Check the university website for details.
          </p>
        </div>

        {/* Random Quote Section */}
        <div className="quote-card">
          <h3>Inspiration Quote:</h3>
          {loading ? (
            <p>Loading quote...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <blockquote>
              <p>"{quote.content}"</p>
              <footer>- {quote.author}</footer>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notices;