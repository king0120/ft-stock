import React, { useContext } from 'react';
import { Flex, Heading } from '@chakra-ui/core';
import { ActiveCompany } from '../../context/ActiveCompanyContext';

const ActiveStockInfo = () => {
  const {stockName, companyInfo} = useContext(ActiveCompany);
  console.log(companyInfo)
  return (
    <Flex dir="row">
      <Heading>{companyInfo.name}</Heading>
      <Heading>{companyInfo.ticker}</Heading>
    </Flex>
  );
}

export default ActiveStockInfo;