import React, { useContext, useRef, useEffect, Ref } from 'react';
import PriceLineChart from '../molecules/PriceLineChart';
import ActiveStockInfo from '../molecules/ActiveStockInfo';
import { Box } from '@chakra-ui/core';
import { useContainerSize } from '../../hooks/useContainerSize';

const containerStyles = {
  border: '1px solid red',
  width: ['100vw', '60vw'],
  height: '50vh'
}
const CompanyStockInfo = () => {
  const containerElement = useRef(null)
  const {width, height} = useContainerSize(containerElement)
  return (
    <Box
      ref={containerElement}
      {...containerStyles}
    >
      <ActiveStockInfo />
      <PriceLineChart width={width} height={height}/>
    </Box>
  )
};

export default CompanyStockInfo;