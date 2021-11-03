import axios from 'axios';
import errorHandlingInterceptor from './errorHandling.interceptor';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '6e402f83105a483a804f4ff33d40dd2e'
  },
});

api.interceptors.response.use(undefined, errorHandlingInterceptor);
export default api;
