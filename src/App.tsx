import React, { useState } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Header from './components/organisms/Header';
import Favorites from './components/organisms/Favorites';
import PriceChart from './components/organisms/PriceChart';
import News from './components/organisms/News';
import 'react-vis/dist/style.css';

export const StockSymbolContext = React.createContext(
  {stockName: '', setStockName: () => {}}
)
interface AppProps { }

function App({ }: AppProps) {
  const [stockName, setStockName] = useState('AAPL')
  
  return (
    <ThemeProvider>
      <StockSymbolContext.Provider value={{stockName, setStockName} as any}>
        <CSSReset />
        <Header />
        <PriceChart/>
        <News/>
        <Favorites />
      </StockSymbolContext.Provider>
    </ThemeProvider>
  );
}

export default App;
