import React, { useState } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Header from './components/organisms/Header';
import Favorites from './components/organisms/Favorites';
import CompanyStockInfo from './components/organisms/CompanyStockInfo';
import News from './components/organisms/News';
import 'react-vis/dist/style.css';
import { ActiveCompanyProvider } from './context/ActiveCompanyContext';

interface AppProps { }

function App({ }: AppProps) {
  
  return (
    <ThemeProvider>
      <ActiveCompanyProvider>
        <CSSReset />
        <Header />
        <CompanyStockInfo/>
        <News/>
        <Favorites />
      </ActiveCompanyProvider>
    </ThemeProvider>
  );
}

export default App;
