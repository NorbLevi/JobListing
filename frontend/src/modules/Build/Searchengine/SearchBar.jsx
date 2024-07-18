// SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, filterJobs }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-md mb-4 flex justify-between items-center">
            <input
                type="text"
                placeholder="Search for jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full"
            />
            <button
                onClick={filterJobs}
                className="ml-4 p-2 bg-blue-500 text-white rounded-md"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
