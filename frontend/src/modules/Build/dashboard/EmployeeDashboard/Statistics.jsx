// src/components/Statistics.js
import React from 'react';

const Stat = () => {
  return (
    <div className="flex justify-around bg-white p-6 border-b mt-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-500">76</h2>
        <p className="text-gray-600">New candidates to review</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-500">3</h2>
        <p className="text-gray-600">Schedule for today</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-500">24</h2>
        <p className="text-gray-600">Messages received</p>
      </div>
    </div>
  );
};

export default Stat;
