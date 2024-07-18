// src/components/JobApplications.js
import React from 'react';

const JobApplications = () => {
  const applications = [
    { company: 'Revolut', position: 'Email Marketing', status: 'Applied' },
    { company: 'Dropbox', position: 'Brand Designer', status: 'Interview' },
    { company: 'Blinkist', position: 'Visual Designer', status: 'Offer' },
  ];

  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Job Applications</h2>
      <ul>
        {applications.map((app, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div>
              <p className="font-bold">{app.company}</p>
              <p className="text-sm text-gray-500">{app.position}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              app.status === 'Applied' ? 'bg-blue-100 text-blue-700' :
              app.status === 'Interview' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {app.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobApplications;
