import React, { useState, FC, useEffect } from 'react';
import fetchCompanyInfo from '../services/fetchCompanyInfo';

export const ActiveCompany = React.createContext({
  stockName: '',
  setStockName: (s: string) => {},
  companyInfo: {} as FinnhubCompanyProfile,
});

export const ActiveCompanyProvider: FC = ({ children }) => {
  const [stockName, setStockName] = useState('AAPL');
  const [companyInfo, setCompanyInfo] = useState<FinnhubCompanyProfile>(
    {} as FinnhubCompanyProfile,
  );

  useEffect(() => {
    fetchCompanyInfo(stockName).then(setCompanyInfo);
  }, [stockName]);
  return (
    <ActiveCompany.Provider
      value={{ stockName, setStockName, companyInfo } as any}
    >
      {children}
    </ActiveCompany.Provider>
  );
};
