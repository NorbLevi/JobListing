// JobList.jsx
import React from 'react';
import JobItem from './JobItem';
import jobs from './JobListItems';

const JobList = () => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Job Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map(job => (
                    <JobItem key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobList;
