import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data),
);

export default api;
