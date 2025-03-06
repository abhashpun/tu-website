import React from 'react';
import '../styles/Notices.css';

const Notices = () => {
  // Sample notices data
  const notices = [
    {
      id: 1,
      title: 'Admission Open for 2025',
      date: '2025-03-01',
      description: 'Admissions for the academic year 2023 are now open. Apply online before October 30, 2023.',
    },
    {
      id: 2,
      title: 'Holi celebration',
      date: '2025-02-15',
      description: 'Festival of colours will be celebrated with our students and staffs in university permises.',
    },
    {
      id: 3,
      title: 'Semester Exam Schedule',
      date: '2025-02-01',
      description: 'The schedule for the upcoming semester exams has been published. Check the university website for details.',
    },
    {
      id: 4,
      title: 'Workshop on Artificial Intelligence',
      date: '2025-02-20',
      description: 'A workshop on AI and Machine Learning will be held on October 20, 2023. Register now!',
    },
    {
      id: 5,
      title: 'Library Closure',
      date: '2025-01-10',
      description: 'The university library will remain closed on October 10, 2023, for maintenance work.',
    },
  ];

  return (
    <div className="notices-container">
      <h1>Notices</h1>
      <div className="notices-grid">
        {notices.map((notice) => (
          <div key={notice.id} className="notice-card">
            <h3>{notice.title}</h3>
            <p className="notice-date">{notice.date}</p>
            <p className="notice-description">{notice.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;