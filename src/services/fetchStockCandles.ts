import finnHubInstance from "./finnHubClient"
import { today, sixHoursAgo } from "../utils/timeUtils"

export default async function fetchStockCandles(symbol: string, ){
  if (!symbol) {
    return {c: [], t: []}
  }
  const {data} = await finnHubInstance.get(`/stock/candle`, {
    params: {
      symbol: symbol,
      resolution: '15',
      from: Math.floor(sixHoursAgo()), 
      to: Math.floor(today())
    }
  }) 
  return data
}