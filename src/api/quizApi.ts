import baseApi   from './index'
import axios from 'axios';

import { WrongWord, RightWord } from '../types/quizType';

const quizApi = axios.create({
  ...baseApi.defaults,
  baseURL: `${baseApi.defaults.baseURL}/quiz`,
});

export const getTodayQuiz = async() => {
  const res = await quizApi.get('/today')
  console.log(res);
  return res.data
}

export const getRandomQuiz = async() => {
  const res = await quizApi.get('/random')
  return res.data
}

export const postWrongWord = async(data:WrongWord) => {
  const res = await quizApi.post('/wrong_word', data)
  return res.data
}

export const postRightWord = async(data:RightWord) => {
  const res = await quizApi.post('/right_word', data)
  return res.data
}

export const getPeopleWrong = async() => {
  const res = await quizApi.get('/peoples_wrong_word')
  return res.data
}