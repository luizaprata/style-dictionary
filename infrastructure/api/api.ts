import axios from 'axios';
import errorHandlingInterceptor from './errorHandling.interceptor';

const api = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines/country=br/",
});

api.interceptors.response.use(undefined, errorHandlingInterceptor);
export default api;
