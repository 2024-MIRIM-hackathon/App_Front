import baseApi   from './index'
import axios from 'axios';

import { Bookmark } from '../types/wordDictionaryType';

const learnedApi = axios.create({
  ...baseApi.defaults,
  baseURL: `${baseApi.defaults.baseURL}/learnedWords`,
});

export const getAllWords = async(userId: string) => {
  const res = await learnedApi.get(`/${userId}`)
  return res.data;
}

export const postBookmark = async(data: Bookmark) => {
  const res = await learnedApi.post('/bookmark', data)
  return res.data;
}