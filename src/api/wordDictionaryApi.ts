import baseApi   from './index'
import axios from 'axios';

const wordDictionaryApi = axios.create({
  ...baseApi.defaults,
  baseURL: `${baseApi.defaults.baseURL}/worddictionary`,
});

// export const 