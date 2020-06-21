import React, { useContext, useEffect } from 'react';
import { Flex, Heading, Image, Text, Tag, TagLabel, TagIcon, Box } from '@chakra-ui/core';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import startWebSocket from 'src/services/priceWebSocket';

const ActiveStockInfo = () => {
  const { stockName, companyInfo } = useContext(ActiveCompany);
  console.log(companyInfo)
  useEffect(() => {
    startWebSocket(stockName)
  }, [])
  
  return (
    <Flex alignItems='center'>
      <Image
        maxW={60}
        maxH={60}
        src={companyInfo.logo || 'https://fedpractice.com/content/uploads/2018/03/placeholder.png'}
        alt={`${companyInfo.name} logo`}
      />
      <Flex direction="column">
        <Heading as="h2" size="xl">{companyInfo.name}</Heading>
        <Text>{companyInfo.ticker}</Text>
      </Flex>
      <Flex justifySelf='flex-end' alignSelf="flex-end">
        <Box></Box>
        <Box>
          <Tag variantColor="green">
            <TagLabel>{companyInfo.country}</TagLabel>
          </Tag>
          <Tag variantColor="teal">
            <TagLabel>{companyInfo.finnhubIndustry}</TagLabel>
          </Tag>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ActiveStockInfo;