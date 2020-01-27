import axios from 'axios';

export const axios4tech = axios.create({
    baseURL : 'localhost:3000/',
    timeout: 10000
})