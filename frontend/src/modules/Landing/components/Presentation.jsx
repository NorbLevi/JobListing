import React, { useState } from 'react';
import personImage from '../../../assets/person.svg'; // Update the path as needed
import shapesImage from '../../../assets/Shapes.svg'; // Update the path as needed
import countries from '../tools/countries';

const Presentation = () => {
  const [selectedCountry, setSelectedCountry] = useState('Italy');
  const [selectedCity, setSelectedCity] = useState('Florence');

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setSelectedCity(countries.find(country => country.country === selectedCountry).cities[0]);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="h-[min(750px,80vh)] flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
          Discover more than <span className="text-purple-500">5000+ Jobs</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:text-xl lg:text-2xl">
          Great platform for the job seeker that searching for new career heights and passionate about startups.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center">
          <input
            type="text"
            className="w-full sm:w-auto px-4 py-2 m-2 border rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none"
            placeholder="Job title or keyword"
          />
          <select
            className="w-full sm:w-auto px-4 py-2 m-2 border-t border-b sm:border-t-0 sm:border-l focus:outline-none"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {countries.map((country, index) => (
              <option key={index} value={country.country}>{country.country}</option>
            ))}
          </select>
          <select
            className="w-full sm:w-auto px-2 py-2  border-t border-b sm:border-t-0 sm:border-r rounded-xl sm:rounded-r-md sm:rounded-b-none focus:outline-none"
            value={selectedCity}
            onChange={handleCityChange}
          >
            {countries.find(country => country.country === selectedCountry).cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
          <button className="w-full m-2 sm:w-auto mt-4 sm:mt-0 px-2  py-2 bg-primary text-white rounded-md hover:bg-primary-600 focus:outline-none">
            Search my job
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">Popular: UI Designer, UX Researcher, Android, Admin</p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
        <img src={shapesImage} alt="Background shapes" className="absolute inset-0 h-full w-full object-cover z-0" />
        <img src={personImage} alt="Job Hunt" className="relative h-96 w-auto z-10" />
      </div>
    </div>
  );
};

export default Presentation;
