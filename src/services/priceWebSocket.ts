import { useState, useEffect } from "react";

export interface RealTimePrice {
    p: number,
    s: string,
    t: number,
    v: number
}
interface RealTimePriceEvent {
  data: string
}
const socket = new WebSocket('wss://ws.finnhub.io?token=brmjibvrh5re15om5k70');

export function useRealtimePrice(symbol: string){
  const [activeSymbol, setActiveSymbol] = useState('')
  const [realTimePrices, setRealTimePrices] = useState<RealTimePrice[]>([])
  useEffect(() => {
    socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}))
      setActiveSymbol(symbol)
    });
  }, [])
  useEffect(() => {
    socket.removeEventListener('message', () => {
      console.log('cleanup')
    })
    socket.addEventListener('message', function (event: RealTimePriceEvent) {
      console.log('Message from server ', event.data);
      const prices = JSON.parse(event?.data)
      if (prices.data[0].s === activeSymbol || prices.data[0].s === 'BINANCE:BTCUSDT') {
        setRealTimePrices([...realTimePrices, ...prices.data])
      }
    });
  }, [activeSymbol])
  
  useEffect(() => {
    if(socket.readyState === socket.OPEN){
      if (activeSymbol && activeSymbol !== symbol) {
        socket.send(JSON.stringify({'type':'unsubscribe','symbol': activeSymbol}))
        setRealTimePrices([])
      }
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}))
      setActiveSymbol(symbol)
    }
  }, [symbol])

  return realTimePrices
}
