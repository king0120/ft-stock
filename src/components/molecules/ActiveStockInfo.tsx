import React, { useContext, useEffect } from 'react';
import { Flex, Heading, Image, Text, Tag, TagLabel, TagIcon, Box } from '@chakra-ui/core';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import { useRealtimePrice } from 'src/services/priceWebSocket';
import { AiOutlineStar } from "react-icons/ai"

const ActiveStockInfo = () => {
  const { stockName, companyInfo } = useContext(ActiveCompany);
  const realTimePrices = useRealtimePrice(stockName)
  console.log("REALTIME", stockName, realTimePrices)
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
        <Box as={AiOutlineStar} />
        <Box>
          <p>Price: {realTimePrices[realTimePrices.length - 1]?.p}</p>
        </Box>
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