import axios from 'axios'

const finnhub = axios.create({
  baseURL: 'https://finnhub.io/api/v1'
});
finnhub.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.token = 'brmjibvrh5re15om5k70'
  return config;
});

export default finnhub