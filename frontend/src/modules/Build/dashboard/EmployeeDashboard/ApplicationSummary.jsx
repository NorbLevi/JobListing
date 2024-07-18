// src/components/ApplicationSummary.js
import React from 'react';

const ApplicationSummary = () => {
  const summary = {
    applied: 45,
    interview: 14,
    offer: 32,
    rejected: 30,
    remote: 22,
  };

  return (
    <div className=" bg-white p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Application Summary</h2>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">{summary.applied + summary.interview + summary.offer + summary.rejected + summary.remote}</p>
        <p className="text-sm text-gray-500">Total Applications</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <span className="h-2 w-2 bg-purple-500 rounded-full inline-block mr-2"></span>
          <p className="text-sm">Full Time <span className="font-bold">{summary.applied}</span></p>
        </div>
        <div className="flex items-center mb-2">
          <span className="h-2 w-2 bg-green-500 rounded-full inline-block mr-2"></span>
          <p className="text-sm">Part-Time <span className="font-bold">{summary.interview}</span></p>
        </div>
        <div className="flex items-center mb-2">
          <span className="h-2 w-2 bg-yellow-500 rounded-full inline-block mr-2"></span>
          <p className="text-sm">Internship <span className="font-bold">{summary.offer}</span></p>
        </div>
        <div className="flex items-center mb-2">
          <span className="h-2 w-2 bg-red-500 rounded-full inline-block mr-2"></span>
          <p className="text-sm">Contract <span className="font-bold">{summary.rejected}</span></p>
        </div>
        <div className="flex items-center">
          <span className="h-2 w-2 bg-blue-500 rounded-full inline-block mr-2"></span>
          <p className="text-sm">Remote <span className="font-bold">{summary.remote}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSummary;
