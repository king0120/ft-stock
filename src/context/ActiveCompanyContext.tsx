import React, { useState, FC, useEffect } from 'react'
import fetchCompanyInfo from '../services/fetchCompanyInfo'
import fetchStockCandles from '../services/fetchStockCandles';
import { useRealtimePrice } from '../services/priceWebSocket';
import type { RealTimePrice } from '../services/priceWebSocket';

export const ActiveCompany = React.createContext({
  stockName: '',
  setStockName: (s: string) => { },
  companyInfo: {} as FinnhubCompanyProfile,
  stockCandles: {} as any,
  realTimePrices: [] as RealTimePrice[]
});

export const ActiveCompanyProvider: FC = ({ children }) => {
  const [stockName, setStockName] = useState('AAPL')
  const [companyInfo, setCompanyInfo] = useState<FinnhubCompanyProfile>({} as FinnhubCompanyProfile)
  const [stockCandles, setStockCandles] = useState<FinnhubCompanyProfile>({} as FinnhubCompanyProfile)
  
  
  useEffect(() => {
    fetchCompanyInfo(stockName).then(setCompanyInfo)
    fetchStockCandles(stockName).then(setStockCandles)  
  }, [stockName])
  return (
    <ActiveCompany.Provider value={{ stockName, setStockName, companyInfo, stockCandles } as any}>
      {children}
    </ActiveCompany.Provider>
  )
}