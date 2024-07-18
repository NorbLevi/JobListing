// Filters.jsx
import React from 'react';

const Filters = ({ filters, setFilters, applyFilters }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-md mb-4">
            <h2 className="text-xl font-bold mb-2">Filters</h2>
            <div className="mb-2">
                <label className="block text-gray-700">Location:</label>
                <input
                    type="text"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Company:</label>
                <input
                    type="text"
                    value={filters.company}
                    onChange={(e) => setFilters({ ...filters, company: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Job Type:</label>
                <input
                    type="text"
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <button
                onClick={applyFilters}
                className="mt-4 p-2 bg-blue-500 text-white rounded-md"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default Filters;
