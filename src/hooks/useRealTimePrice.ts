import { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { ActiveCompany } from '../context/ActiveCompanyContext';

export interface RealTimePrice {
  p: number;
  s: string;
  t: number;
  v: number;
}
interface RealTimePriceEvent {
  data: string;
}
function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function useRealtimePrice() {
  const { stockName } = useContext(ActiveCompany);
  const prev = usePrevious(stockName)
  const [realTimePrices, setRealTimePrices] = useState<RealTimePrice[]>([]);

  const setPriceOnUpdate = useCallback((event: RealTimePriceEvent) => {
    const prices = JSON.parse(event?.data);
    if (prices.data[0].s === stockName) {
      setRealTimePrices([...realTimePrices, ...prices.data]);
    }
  }, [stockName])

  useEffect(() => {
    const socket = new WebSocket('wss://ws.finnhub.io?token=brmjibvrh5re15om5k70');
    socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({ type: 'subscribe', symbol: stockName }));
      socket.addEventListener('message', setPriceOnUpdate);
    });
    return () => socket.close()
  }, [stockName]);
  
  return realTimePrices;
}
