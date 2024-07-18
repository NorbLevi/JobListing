// JobSearchPage.jsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import JobList from './JobList';

const JobSearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ location: '', company: '', type: '' });
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    const filterJobs = () => {
        let filtered = jobs.filter(job => 
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filters.location) {
            filtered = filtered.filter(job => 
                job.location.toLowerCase().includes(filters.location.toLowerCase())
            );
        }

        if (filters.company) {
            filtered = filtered.filter(job => 
                job.company.toLowerCase().includes(filters.company.toLowerCase())
            );
        }

        if (filters.type) {
            filtered = filtered.filter(job => 
                job.type.toLowerCase().includes(filters.type.toLowerCase())
            );
        }

        setFilteredJobs(filtered);
    };

    const applyFilters = () => {
        filterJobs();
    };

    return (
        <div className="container mx-auto p-4">
            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                filterJobs={filterJobs}
            />
            <Filters 
                filters={filters} 
                setFilters={setFilters} 
                applyFilters={applyFilters}
            />
            <JobList jobs={filteredJobs} />
        </div>
    );
};

export default JobSearchPage;
