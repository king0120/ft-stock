import finnHubInstance from "./finnHubClient"
import { sixMonthsAgo, today, oneDayAgo, sixHoursAgo } from "../utils/timeUtils"

export default async function fetchStockCandles(symbol: string, ){
  if (!symbol) {
    return {c: [], t: []}
  }
  const {data} = await finnHubInstance.get(`/stock/candle`, {
    params: {
      symbol: symbol,
      resolution: '15',
      from: parseInt(sixHoursAgo), 
      to: parseInt(today)
    }
  }) 
  return data
}