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
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Job Applied',
        data: [2, 3, 20, 5, 1, 4, 6],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
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
    <div className=" w-full bg-white p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Job statistics</h2>
      <div className="flex justify-between mb-4">
        <div className="w-full lg:w-2/3">
          <Bar data={data} options={options} />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-between p-4">
          <div className="mb-4">
            <h3 className="text-lg font-bold">Job Views</h3>
            <p className="text-3xl font-bold">2,342</p>
            <p className="text-sm text-gray-500">This Week <span className="text-green-500">6.4% ↑</span></p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Job Applied</h3>
            <p className="text-3xl font-bold">654</p>
            <p className="text-sm text-gray-500">This Week <span className="text-red-500">0.5% ↓</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobStatistics;
