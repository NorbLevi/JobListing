import React from 'react';

const SingleJobViewer = ({ job }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-gray-600">{job.type}</p>
            <div className="mt-4">
                <h3 className="text-lg font-bold">Job Description</h3>
                <p>{job.description}</p>
            </div>
        </div>
    );
};

export default SingleJobViewer;
