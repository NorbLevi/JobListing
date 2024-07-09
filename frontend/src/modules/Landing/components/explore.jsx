// src/components/explore.js
import React from 'react';
import { Link } from 'react-router-dom';
import jobCategories from '../tools/jobCategory';
import dashboard from "../../../assets/dashboard.png";

const Explore = () => {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Explore by <span className="text-purple-500">category</span>
            </h2>
            <Link to="/jobs" className="text-purple-500">
              Show all jobs →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg flex flex-col items-center justify-between hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <category.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-500 hover:text-white">
                  {category.jobs} jobs available →
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-primary text-white p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:mr-8">
              <h3 className="text-3xl font-bold">Start posting jobs today</h3>
              <p className="mt-2 text-lg">Start posting jobs for only $10.</p>
              <Link to="/signup" className="mt-4 inline-block px-6 py-3 bg-white text-purple-500 font-bold rounded-md">
                Sign Up For Free
              </Link>
            </div>
            <img src={dashboard} alt="Dashboard" className="h-48 w-auto" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Explore;