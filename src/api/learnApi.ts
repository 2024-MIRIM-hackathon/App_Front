import baseApi   from './index'
import axios from 'axios';

import { Learn } from '../types/learnType';
import { LearnRes } from '../types/learnType';

const learnApi = axios.create({
  ...baseApi.defaults,
  baseURL: `${baseApi.defaults.baseURL}/daily`,
});

export const getDailyLearn = async(data: Learn) => {
    const res = await learnApi.get(`/todays?user_id=${data.userId}&date=${data.date}`)
    return res.data
}