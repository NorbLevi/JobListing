import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full py-8 px-20 flex justify-between items-center bg-[linear-gradient(180deg,#F4E7FF_0%,transparent_100%)]">
      <div className="text-xl font-bold">
        <Link to="/">
        <h1 className="text-3xl font-bold">
        jObL
        <span className="text-primary font-bold">Y</span>
        </h1>
        </Link>
      </div>
      <div className="space-x-4">
        <Link to="/find-jobs" className="text-gray-600 hover:text-primary hover:scale-125">Find Jobs</Link>
        <Link to="/browse-companies" className="text-gray-600 hover:text-primary hover:scale-125">Browse Companies</Link>
        <Link to="/login" className="text-gray-600 hover:text-primary hover:scale-125">Login</Link>
        <button>
        <Link to="/register" className="bg-primary text-white py-2 px-4 rounded 0">Sign Up</Link>
        </button>
        
      </div>
    </nav>
  );
};

export default NavBar;

