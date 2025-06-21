// src/services/aboutService.js
import axios from 'axios';


const API_URL = 'http://localhost:5000/api/about';

export const getAbout = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createAbout = (data) => axios.post(API_URL, data);
export const updateAbout = (id, data) => axios.put(`${API_URL}/${id}`, data);
