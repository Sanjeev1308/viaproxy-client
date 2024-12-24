import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createAxiosInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
