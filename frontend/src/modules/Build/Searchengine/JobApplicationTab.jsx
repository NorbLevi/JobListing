import React from 'react';

const JobApplicationTab = () => {
    return (
        <div className="bg-white p-4 rounded shadow mt-4">
            <h2 className="text-xl font-bold mb-2">Apply for Job</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Full Name</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Resume</label>
                    <input type="file" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Application</button>
            </form>
        </div>
    );
};

export default JobApplicationTab;
