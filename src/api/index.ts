import { API } from '@env';
import axios from 'axios';

const baseApi = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default baseApi;