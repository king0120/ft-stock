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
socket.addEventListener('open', function (event) {
  console.log("FIRST OPEN")
});

export function useRealtimePrice(symbol: string){
  const [activeSymbol, setActiveSymbol] = useState('')
  const [realTimePrices, setRealTimePrices] = useState<RealTimePrice[]>([])
  useEffect(() => {
    socket.addEventListener('message', function (event: RealTimePriceEvent) {
      console.log('Message from server ', event.data);
      const prices = JSON.parse(event?.data)
      // console.log('Prices', prices)
      if (prices.data[0].s === activeSymbol || prices.data[0].s === 'BINANCE:BTCUSDT') {
        setRealTimePrices([...realTimePrices, ...prices.data])
      }
    });
  }, [])
  
  useEffect(() => {
    if(socket.readyState === socket.OPEN){
      // console.log("SOCKET IS OPEN")
      if (activeSymbol && activeSymbol !== symbol) {
        // console.log("UNSUB FROM ", activeSymbol)
        // socket.send(JSON.stringify({'type':'unsubscribe','symbol': activeSymbol}))
        setRealTimePrices([])
        socket.send(JSON.stringify({'type':'unsubscribe', 'symbol': 'BINANCE:BTCUSDT'}))
      }
      // console.log("SUB TO ", symbol)
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}))
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
      setActiveSymbol(symbol)
    }
  }, [symbol])

  return realTimePrices
}
