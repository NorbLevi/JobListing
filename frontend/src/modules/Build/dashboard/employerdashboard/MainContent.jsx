// src/components/MainContent.js
import React from 'react';
import Statistics from './Statistics';
import JobStatistics from './JobStatistics';
import ApplicantsSummary from './ApplicantsSummary';

const MainContent = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <Statistics />
      <JobStatistics />
      <ApplicantsSummary />
    </div>
  );
};

export default MainContent;
