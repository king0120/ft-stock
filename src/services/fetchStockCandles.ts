import finnHubInstance from "./finnHubClient"
import { sixMonthsAgo, today } from "../utils/timeUtils"

export default async function fetchStockCandles(symbol: string, ){
  if (!symbol) {
    return {c: [], t: []}
  }
  const {data} = await finnHubInstance.get(`/stock/candle`, {
    params: {
      symbol: 'AAPL',
      resolution: 'D',
      from: parseInt(sixMonthsAgo), 
      to: parseInt(today)
    }
  }) 
  return data
}