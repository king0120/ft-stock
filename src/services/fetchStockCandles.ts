import finnHubInstance from "./finnHubInstance"

export default async function fetchStockCandles(symbol: string, ){
  if (!symbol) {
    return {c: [], t: []}
  }
  const {data} = await finnHubInstance.get(`/stock/candle`, {
    params: {
      symbol: symbol,
      resolution: 'D',
      from: 1557340800, 
      to: 1587340800
    }
  }) 
  return data
}