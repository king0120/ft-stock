import React, { useState } from 'react';
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core'
import Header from './components/organisms/Header';
import Favorites from './components/organisms/Favorites';
import CompanyStockInfo from './components/organisms/CompanyStockInfo';
import News from './components/organisms/News';
import 'react-vis/dist/style.css';
import { ActiveCompanyProvider } from './context/ActiveCompanyContext';
import Container from './components/organisms/Container';

interface AppProps { }

function App({ }: AppProps) {

  return (
    <ThemeProvider>
      <ActiveCompanyProvider>
        <CSSReset />
        <Header />
        <Container>
          <Box width={["100%", "100%", "100%", "80%"]}>
            <CompanyStockInfo/>
            <News/>
          </Box>
          <Box width={["0%", "0%", "0%", "20%"]}>
            <Favorites />
          </Box>
        </Container>
      </ActiveCompanyProvider>
    </ThemeProvider>
  );
}

export default App;
