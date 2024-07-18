import React from 'react';

const ApplicantsSummary = () => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Applicants Summary</h2>
      <div className="flex items-center mb-6">
        <h2 className="text-5xl font-bold text-gray-800">67</h2>
        <p className="ml-2 text-xl text-gray-500">Applicants</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="w-full h-2 flex">
          <div className="bg-[#A154F2] h-full" style={{ width: '30%' }}></div>
          <div className="bg-[#00D99D] h-full" style={{ width: '20%' }}></div>
          <div className="bg-[#FEC13D] h-full" style={{ width: '15%' }}></div>
          <div className="bg-[#F34561] h-full" style={{ width: '20%' }}></div>
          <div className="bg-[#2E7DF6] h-full" style={{ width: '15%' }}></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-[#A154F2] rounded-full mr-2"></span>
            <p className="text-gray-600">Full Time: <span className="font-bold text-gray-800">45</span></p>
          </div>
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-[#00D99D] rounded-full mr-2"></span>
            <p className="text-gray-600">Part-Time: <span className="font-bold text-gray-800">24</span></p>
          </div>
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-[#FEC13D] rounded-full mr-2"></span>
            <p className="text-gray-600">Internship: <span className="font-bold text-gray-800">32</span></p>
          </div>
          <div className="flex items-center mr-4">
            <span className="w-3 h-3 bg-[#F34561] rounded-full mr-2"></span>
            <p className="text-gray-600">Contract: <span className="font-bold text-gray-800">30</span></p>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#2E7DF6] rounded-full mr-2"></span>
            <p className="text-gray-600">Remote: <span className="font-bold text-gray-800">22</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsSummary;
