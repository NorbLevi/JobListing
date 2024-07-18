// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Header from './Header';

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
