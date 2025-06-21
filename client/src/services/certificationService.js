import axios from 'axios';

const API_URL = 'http://localhost:5000/api/certifications';

export const getCertifications = () => axios.get(API_URL);
export const createCertification = (data) => axios.post(API_URL, data);
export const updateCertification = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCertification = (id) => axios.delete(`${API_URL}/${id}`);
