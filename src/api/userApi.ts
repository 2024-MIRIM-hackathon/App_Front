import baseApi   from './index'
import axios from 'axios';

import {Join, JoinRes} from '../types/userType'

const userApi = axios.create({
  ...baseApi.defaults,
  baseURL: `${baseApi.defaults.baseURL}/user`,
});

export const postUserJoin = async (joinData: Join): Promise<JoinRes> => {
  try {
    const response = await userApi.post('/join', joinData);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};