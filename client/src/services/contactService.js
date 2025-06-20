import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/contact';

export const getContacts = () => axios.get(BASE_URL);
export const updateContact = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteContact = (id) => axios.delete(`${BASE_URL}/${id}`);
