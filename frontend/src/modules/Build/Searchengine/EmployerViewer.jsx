import React from 'react';

const EmployerViewer = ({ employer }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold">{employer.name}</h2>
            <p className="text-gray-600">{employer.location}</p>
            <p className="text-gray-600">{employer.industry}</p>
            <div className="mt-4">
                <h3 className="text-lg font-bold">About Company</h3>
                <p>{employer.description}</p>
            </div>
        </div>
    );
};

export default EmployerViewer;
