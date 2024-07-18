// src/components/JobStatistics.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const JobStatistics = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Job View',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: '#4C51BF', // purple
      },
      {
        label: 'Job Applied',
        data: [2, 3, 20, 5, 1, 4, 6],
        backgroundColor: '#FEB2B2', // red
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm mt-4">
      <h2 className="text-xl font-bold mb-4">Job statistics</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="text-blue-500 border-b-2 border-blue-500 pb-2">Overview</button>
          <button className="text-gray-500">Jobs View</button>
          <button className="text-gray-500">Jobs Applied</button>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-1 border rounded-md text-gray-600">Week</button>
          <button className="px-4 py-1 border rounded-md text-gray-600">Month</button>
          <button className="px-4 py-1 border rounded-md text-gray-600">Year</button>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <div className="w-2/3">
          <Bar data={data} options={options} />
        </div>
        <div className="w-1/3 flex flex-col justify-between p-4">
          <div className="mb-4">
            <h3 className="text-lg font-bold">Job Views</h3>
            <p className="text-3xl font-bold">2,342</p>
            <p className="text-sm text-gray-500">This Week <span className="text-blue-500">6.4% ↑</span></p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Job Applied</h3>
            <p className="text-3xl font-bold">654</p>
            <p className="text-sm text-gray-500">This Week <span className="text-red-500">0.5% ↓</span></p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-full lg:w-1/3 mb-4">
          <h3 className="text-lg font-bold">Job Open</h3>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-500">Jobs Opened</p>
        </div>
        <div className="w-full lg:w-2/3 mb-4">
          <h3 className="text-lg font-bold">Application Summary</h3>
          <p className="text-3xl font-bold">57</p>
          <div className="flex items-center mt-2">
            <div className="h-2 w-full bg-purple-500" style={{ width: '45%' }}></div>
            <div className="h-2 w-full bg-green-500" style={{ width: '24%' }}></div>
            <div className="h-2 w-full bg-yellow-500" style={{ width: '32%' }}></div>
            <div className="h-2 w-full bg-red-500" style={{ width: '30%' }}></div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center text-sm text-gray-500">
              <span className="h-2 w-2 bg-purple-500 rounded-full inline-block mr-2"></span> Full Time <span className="ml-1 text-black font-bold">45</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="h-2 w-2 bg-green-500 rounded-full inline-block mr-2"></span> Part-Time <span className="ml-1 text-black font-bold">14</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="h-2 w-2 bg-yellow-500 rounded-full inline-block mr-2"></span> Internship <span className="ml-1 text-black font-bold">32</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="h-2 w-2 bg-red-500 rounded-full inline-block mr-2"></span> Contract <span className="ml-1 text-black font-bold">30</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="h-2 w-2 bg-blue-500 rounded-full inline-block mr-2"></span> Remote <span className="ml-1 text-black font-bold">22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatistics;
