import baseApi   from './index'
import axios from 'axios';

import {Join, JoinRes, InfoData, LoginData} from '../types/userType'

const userApi = axios.create({
  ...baseApi.defaults,
  baseURL: `${baseApi.defaults.baseURL}/user`,
});

export const postUserJoin = async (joinData: Join): Promise<JoinRes> => {
  try {
    const response = await userApi.post('/join', joinData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLoginUser = async (loginData:LoginData) => {
  try {
    const response = await userApi.post('/login', loginData);
    return response.data;
  } catch(error) {
    throw error;
  }
}

export const postLogout = async () => {
  try {
    const res = await userApi.post('/logout')
    return res.data;
  } catch(error) {
    throw error
  }
}

export const getInfo = async (): Promise<InfoData> => {
  try {
    const res = await userApi.get('/info')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getRecord = async() => {
  const res = await baseApi.get('/mypage/record')
  return res.data
}

export const getLevel = async() => {
  const res = await baseApi.get('/user/level')
  return res.data
}