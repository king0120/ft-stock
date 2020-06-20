import React, { useState, FC, useEffect } from 'react'
import fetchCompanyInfo from 'src/services/fetchCompanyInfo'

export const ActiveCompany = React.createContext(
  {stockName: '', setStockName: () => {}, companyInfo: {}, setCompanyInfo: () => {}}
)

export const ActiveCompanyProvider: FC = ({children}) => {
  const [stockName, setStockName] = useState('AAPL')
  const [companyInfo, setCompanyInfo] = useState({})
  useEffect(() => {
    fetchCompanyInfo(stockName).then((data) => {
      setCompanyInfo(data)
    })
  }, [stockName])
  return (
    <ActiveCompany.Provider value={{stockName, setStockName, companyInfo} as any}>
      {children}
    </ActiveCompany.Provider>
  )
}