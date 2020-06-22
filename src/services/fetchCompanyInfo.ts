import finnHubClient from './finnHubClient';

export default async function fetchCompanyInfo(symbol: string) {
  const res = await finnHubClient.get('/stock/profile2', {
    params: { symbol },
  });

  return res.data;
}
