import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginWithGoogle = () => {
    window.location.href = 'http://localhost:5000/auth/google';
};

export const loginWithGitHub = () => {
    window.location.href = 'http://localhost:5000/auth/github';
};

export const loginWithLinkedIn = () => {
    window.location.href = 'http://localhost:5000/auth/linkedin';
};

export const searchJobs = async (searchParams) => {
  try {
    const response = await axios.get(`${API_URL}/jobs/search`, { params: searchParams });
    return response.data;
  } catch (error) {
    throw error;
  }
};
