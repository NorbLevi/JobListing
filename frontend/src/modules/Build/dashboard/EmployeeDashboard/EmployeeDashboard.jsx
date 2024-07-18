// src/components/EmployeeDashboard.js
import React from 'react';
import Sidebar from './sidebar';
import JobStatistics from './JobStatistics';
import ApplicationSummary from './ApplicationSummary';
import JobApplications from './JobApplications';
import InterviewSchedule from './InterviewSchedule';
import Header from './Header';
import Stat from './Statistics';

const EmployeeDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 bg-gray-100 flex-1 min-h-screen">
        <Header />
        <Stat />
        <div className="w-full flex-1 p-6 bg-gray-100 grid gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <JobStatistics />
            <ApplicationSummary />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <JobApplications />
          <InterviewSchedule />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
