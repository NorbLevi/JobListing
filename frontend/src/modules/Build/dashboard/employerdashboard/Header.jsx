// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-6 border-b">
      <div>
        <h1 className="text-xl font-bold">Good morning, Maria</h1>
        <p className="text-gray-500">Here is your job listings statistics report from July 19 - July 25.</p>
      </div>
      <button className="bg-primary text-white px-4 py-2 rounded">Post a job</button>
    </div>
  );
};

export default Header;
