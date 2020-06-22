import finnHubInstance from './finnHubClient';

export default async function fetchStockQuote(symbol: string) {
  const { data } = await finnHubInstance.get(`/quote`, {
    params: { symbol },
  });
  return data;
}
