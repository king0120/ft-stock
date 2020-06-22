import React, { useState } from 'react';
import { ThemeProvider, CSSReset, Box, Flex } from '@chakra-ui/core'
import Header from './components/organisms/Header';
import Favorites from './components/organisms/Favorites';
import CompanyStockInfo from './components/organisms/CompanyStockInfo';
import News from './components/organisms/News';
import 'react-vis/dist/style.css';
import { ActiveCompanyProvider } from './context/ActiveCompanyContext';
import Container from './components/organisms/Container';
import { FavoritesProvider } from './context/FavoritesContext';

interface AppProps { }

function App({ }: AppProps) {

  return (
    <ThemeProvider>
      <FavoritesProvider>
        <ActiveCompanyProvider>
          <CSSReset />
          <Header />
          <Container>
            <Flex width={'100%'}>
              <CompanyStockInfo/>
              <Favorites />
            </Flex>
            <Box width={"100%"}>
              <News/>
            </Box>
          </Container>
          <Favorites />
        </ActiveCompanyProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
