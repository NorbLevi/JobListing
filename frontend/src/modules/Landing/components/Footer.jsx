import React from 'react';
import { FaFacebook, FaInstagram, FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="top-0 left-0 w-full py-8 px-20 flex justify-between items-center bg-[linear-gradient(0deg,#F4E7FF_0%,transparent_100%)]">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-black text-lg font-bold mb-4">jObLY</h3>
            <p>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
          </div>
          <div>
            <h3 className="text-black text-lg font-bold mb-4">About</h3>
            <ul>
              <li><a href="#" className="hover:text-purple-500">Companies</a></li>
              <li><a href="#" className="hover:text-purple-500">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-500">Terms</a></li>
              <li><a href="#" className="hover:text-purple-500">Advice</a></li>
              <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-purple-500">Help Docs</a></li>
              <li><a href="#" className="hover:text-purple-500">Guide</a></li>
              <li><a href="#" className="hover:text-purple-500">Updates</a></li>
              <li><a href="#" className="hover:text-purple-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black text-lg font-bold mb-4">Get job notifications</h3>
            <p>The latest job news, articles, sent to your inbox weekly.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className='text-black'> &copy;  jObLY 2024 All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500">
              <FaDribbble />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
