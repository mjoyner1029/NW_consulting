import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Change this to your backend URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to handle user login
export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/login', loginData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
