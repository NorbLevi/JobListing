// JobItem.js
import React from 'react';

const JobItem = ({ job }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-md flex items-center space-x-4">
            <div className="text-3xl">
                {job.icon}
            </div>
            <div>
                <h3 className="text-lg font-bold">{job.title}</h3>
                <p className="text-gray-500">{job.company}</p>
                <p className="text-gray-500">{job.location}</p>
                <p className="text-gray-500">{job.type}</p>
            </div>
        </div>
    );
};

export default JobItem;
