import React from 'react';
import { ThemeProvider, CSSReset, Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/core'
import Header from './components/Header';
import PriceChart from './components/PriceChart';
import News from './components/News';
import Favorites from './components/Favorites';
interface AppProps { }

function App({ }: AppProps) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <PriceChart/>
      <News/>
      <Favorites />
    </ThemeProvider>
  );
}

export default App;
