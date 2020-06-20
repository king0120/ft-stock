import React, { useContext } from 'react';
import PriceLineChart from '../molecules/PriceLineChart';
import ActiveStockInfo from '../molecules/ActiveStockInfo';
import { Box } from '@chakra-ui/core';


const CompanyStockInfo = () => {
  return (
    <Box>
      <ActiveStockInfo />
      <PriceLineChart />
    </Box>
  )
};

export default CompanyStockInfo;