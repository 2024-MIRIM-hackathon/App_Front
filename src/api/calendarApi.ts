import baseApi   from './index'
import axios from 'axios';

import { Learn } from '../types/learnType';

const calendarApi = axios.create({
  ...baseApi.defaults,
  baseURL: `${baseApi.defaults.baseURL}/date`,
});

export const getDate = async(data: Learn) => {
    const res = await calendarApi(`?user_id=${data.userId}&date=${data.date}`)
    return res.data;
}