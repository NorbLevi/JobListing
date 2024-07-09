import React from 'react';
import { FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import featuredJobs from '../tools/featuredJobsData';

const FeaturedJobs = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredJobs.map((job, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            <img src={job.logo} alt={`${job.company} logo`} className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <div className="flex items-center text-sm text-gray-500">
              <FaMapMarkerAlt className="mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <FaRegClock className="mr-1" />
              {job.type}
            </div>
            <div className="flex flex-wrap mt-2">
              {job.categories.map((category, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  {category}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
