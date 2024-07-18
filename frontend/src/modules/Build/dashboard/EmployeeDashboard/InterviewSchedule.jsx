// src/components/InterviewSchedule.js
import React from 'react';

const InterviewSchedule = () => {
  const interviews = [
    { date: '2024-07-19', company: 'Dropbox', position: 'Brand Designer', time: '10:00 AM' },
    { date: '2024-07-20', company: 'Revolut', position: 'Email Marketing', time: '2:00 PM' },
    { date: '2024-07-21', company: 'Blinkist', position: 'Visual Designer', time: '11:00 AM' },
  ];

  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Interview Schedule</h2>
      <ul>
        {interviews.map((interview, index) => (
          <li key={index} className="mb-2">
            <p className="font-bold">{interview.date}</p>
            <p className="text-sm text-gray-500">{interview.company} - {interview.position} at {interview.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewSchedule;
