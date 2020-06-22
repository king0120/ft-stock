import finnHubInstance from './finnHubClient';

export default async function fetchStockSymbols() {
  const { data } = await finnHubInstance.get(`/stock/symbol`, {
    params: {
      exchange: 'US',
    },
  });
  return data;
}
