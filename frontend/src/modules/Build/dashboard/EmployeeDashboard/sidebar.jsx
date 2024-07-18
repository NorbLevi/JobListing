// src/components/Sidebar.js
import React from 'react';
import { FiMessageCircle, FiUser, FiFileText, FiCalendar, FiSettings, FiHelpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-50 p-6 border-r">
      <Link to="/" className="text-2xl font-bold mb-6">
      <h1 className="text-3xl font-bold">
        jObL
        <span className="text-primary font-bold">Y</span>
        </h1>
        </Link>
      <nav>
        <ul className="space-y-4">
          <li className="text-blue-500 font-bold">Dashboard</li>
          <button className=" hover:bg-primary px-4 py-2 rounded"> 
          <li className="text-gray-600 hover:text-white "><FiMessageCircle className="inline-block mr-2" />Messages</li>
          </button>
          <button className=" hover:bg-primary px-4 py-2 rounded">
          <li className="text-gray-600 hover:text-white"><FiUser className="inline-block mr-2" />Company Profile</li>
          </button>
          <button className=" hover:bg-primary px-4 py-2 rounded">
          <li className="text-gray-600 hover:text-white"><FiUser className="inline-block mr-2" />All Applicants</li>
          </button>
          <button className=" hover:bg-primary px-4 py-2 rounded">
          <li className="text-gray-600 hover:text-white"><FiFileText className="inline-block mr-2" />Job Listing</li>
          </button>
          <button className=" hover:bg-primary px-4 py-2 rounded">
          <li className="text-gray-600 hover:text-white"><FiCalendar className="inline-block mr-2" />My Schedule</li>
          </button>
          <button className=" hover:bg-primary px-4 py-2 rounded">
          <li className="text-gray-600 hover:text-white"><FiCalendar className="inline-block mr-2" />My Schedule</li>
          </button>
          <button className=" hover:bg-primary px-4 py-2 rounded">
          <li className="text-gray-600 hover:text-white"><FiSettings className="inline-block mr-2" />Settings</li>
          </button>
          <button className=" hover:bg-primary px-4 py-2 rounded">
          <li className="text-gray-600 hover:text-white"><FiHelpCircle className="inline-block mr-2" />Help Center</li>
          </button>
          </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
