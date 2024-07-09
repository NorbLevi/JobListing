// src/components/jobCategory.js
import { FaPaintBrush, FaChartLine, FaBullhorn, FaCalculator, FaLaptopCode, FaCog, FaBriefcase, FaUsers } from 'react-icons/fa';

const jobCategories = [
  { name: 'Design', jobs: 235, icon: FaPaintBrush },
  { name: 'Sales', jobs: 756, icon: FaChartLine },
  { name: 'Marketing', jobs: 140, icon: FaBullhorn, highlight: true },
  { name: 'Finance', jobs: 325, icon: FaCalculator },
  { name: 'Technology', jobs: 436, icon: FaLaptopCode },
  { name: 'Engineering', jobs: 542, icon: FaCog },
  { name: 'Business', jobs: 211, icon: FaBriefcase },
  { name: 'Human Resource', jobs: 346, icon: FaUsers },
];

export default jobCategories;
