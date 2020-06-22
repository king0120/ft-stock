import axios, { AxiosRequestConfig } from 'axios';

const finnhubClient = axios.create({
  baseURL: 'https://finnhub.io/api/v1',
});
finnhubClient.interceptors.request.use((config: AxiosRequestConfig) => {
  config.params = config.params || {};
  config.params.token = 'brmjibvrh5re15om5k70';
  return config;
});

export default finnhubClient;
