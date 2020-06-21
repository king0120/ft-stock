import React from 'react';
import { Heading, Box } from "@chakra-ui/core";
import StockAutosuggest from '../molecules/StockAutosuggest';


const Header = () => {
  
  return (
    <Box display="flex" bg="#aabbcc" w="100%" p={4} color="white">
      <Heading width="33%">FlashStock</Heading>
      <StockAutosuggest />
    </Box>
  );
};

export default Header;