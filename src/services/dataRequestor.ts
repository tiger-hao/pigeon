import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { store } from 'store/store';
import { logout } from 'store/auth/authActions';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response?.status === 401) {
    store.dispatch(logout());
  }

  return Promise.reject(error);
});

export const dataRequestor = axiosInstance;
