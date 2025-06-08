import baseApi   from './index'
import axios from 'axios';

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