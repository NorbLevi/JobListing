// src/components/JobSearch.jsx
import React, { useState } from 'react';
import { searchJobs } from '../services/api';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    company: '',
    location: '',
    industry: '',
    employmentType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSearch = async () => {
    try {
      const results = await searchJobs(filters);
      setJobs(results);
    } catch (error) {
      console.error('Error searching for jobs:', error);
    }
  };

  return (
    <div className="job-search">
      <h2>Search for Jobs</h2>
      <div className="filters">
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={handleInputChange}
          placeholder="Job Title"
        />
        <input
          type="text"
          name="company"
          value={filters.company}
          onChange={handleInputChange}
          placeholder="Company"
        />
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="industry"
          value={filters.industry}
          onChange={handleInputChange}
          placeholder="Industry"
        />
        <input
          type="text"
          name="employmentType"
          value={filters.employmentType}
          onChange={handleInputChange}
          placeholder="Employment Type"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="job-results">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.industry}</p>
              <p>{job.employmentType}</p>
              <p>{job.description}</p>
            </div>
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default JobSearch;
