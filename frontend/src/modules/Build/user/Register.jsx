import React, { useState } from 'react';
import { register } from '../../../services/api';
import NavBar from '../../Landing/components/Navbar';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('individual');
  const [companyDetails, setCompanyDetails] = useState({
    companyName: '',
    position: '',
    type: '',
    address: '',
    location: '',
    city: '',
    industry: ''
  });
  const [error, setError] = useState('');
  const [existingCompanyError, setExistingCompanyError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = { name, email, password, role, ...companyDetails };
    try {
      const response = await register(requestData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify({ name, email, role }));
      if (role === 'company') {
        navigate('/employer-dashboard');
      } else {
        navigate('/employee-dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data.message === 'Company already registered') {
        setExistingCompanyError('Company already registered. Would you like to log in?');
      } else {
        setError('Error registering user');
      }
    }
  };

  const handleCompanyDetailsChange = (e) => {
    setCompanyDetails({
      ...companyDetails,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <NavBar />
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        {existingCompanyError && (
          <div className="space-y-4">
            <p className="text-red-500">{existingCompanyError}</p>
            <button
              onClick={() => navigate('/login')}
              className="w-full p-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
            >
              Log In
            </button>
          </div>
        )}
        {!existingCompanyError && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Register as</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="individual">Individual</option>
                <option value="company">Company</option>
              </select>
            </div>
            {role === 'company' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={companyDetails.companyName}
                    onChange={handleCompanyDetailsChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={companyDetails.position}
                    onChange={handleCompanyDetailsChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type of Company</label>
                  <input
                    type="text"
                    name="type"
                    value={companyDetails.type}
                    onChange={handleCompanyDetailsChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={companyDetails.address}
                    onChange={handleCompanyDetailsChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={companyDetails.location}
                    onChange={handleCompanyDetailsChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={companyDetails.city}
                    onChange={handleCompanyDetailsChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={companyDetails.industry}
                    onChange={handleCompanyDetailsChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </>
            )}
            <button type="submit" className="w-full p-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
