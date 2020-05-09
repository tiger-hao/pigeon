import axios, { AxiosRequestConfig } from 'axios';
import { store } from 'store/store';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export const dataRequestor = axiosInstance;
