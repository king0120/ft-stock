import finnHubInstance from './finnHubClient';
import { today, TimeOptions, AvailableTimes } from '../utils/timeUtils';

export default async function fetchStockCandles(
  symbol: string,
  availableTimes: AvailableTimes = 'oneDayAgo',
) {
  if (!symbol) {
    return { c: [], t: [] };
  }
  const { data } = await finnHubInstance.get(`/stock/candle`, {
    params: {
      symbol: symbol,
      resolution: TimeOptions[availableTimes].resolution,
      from: Math.floor(TimeOptions[availableTimes].from()),
      to: Math.floor(today()),
    },
  });
  return data;
}
