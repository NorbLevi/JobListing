// src/components/Sidebar.js
import React from 'react';
import { FiMessageCircle, FiUser, FiFileText, FiCalendar, FiSettings, FiHelpCircle } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-50 p-6 border-r">
      <h2 className="text-2xl font-bold mb-6">JobHunty</h2>
      <nav>
        <ul className="space-y-4">
          <li className="text-blue-500 font-bold">Dashboard</li>
          <li className="text-gray-600"><FiMessageCircle className="inline-block mr-2" />Messages</li>
          <li className="text-gray-600"><FiUser className="inline-block mr-2" />Company Profile</li>
          <li className="text-gray-600"><FiUser className="inline-block mr-2" />All Applicants</li>
          <li className="text-gray-600"><FiFileText className="inline-block mr-2" />Job Listing</li>
          <li className="text-gray-600"><FiCalendar className="inline-block mr-2" />My Schedule</li>
          <li className="mt-6 text-gray-600"><FiSettings className="inline-block mr-2" />Settings</li>
          <li className="text-gray-600"><FiHelpCircle className="inline-block mr-2" />Help Center</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
