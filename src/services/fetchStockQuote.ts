import finnHubInstance from "./finnHubClient"

export default async function fetchStockSymbols(symbol: string){
  const {data} = await finnHubInstance.get(`/quote`, {
    params: {symbol}
  }) 
  return data
}