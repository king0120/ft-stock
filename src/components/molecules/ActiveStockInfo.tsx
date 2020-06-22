import React, { useContext, useState, useEffect } from 'react';
import { Flex, Heading, Image, Text, Tag, TagLabel, TagIcon, Box } from '@chakra-ui/core';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import { useRealtimePrice } from '../../services/priceWebSocket';
import FavoriteIcon from '../atoms/FavoriteIcon';
import fetchStockQuote from 'src/services/fetchStockQuote';

const ActiveStockInfo = () => {
  const { stockName, companyInfo } = useContext(ActiveCompany);
  const [price, setPrice] = useState(0)
  const realTimePrices = useRealtimePrice(stockName)
  useEffect(() => {
    fetchStockQuote(stockName).then((data) => setPrice(data.c))
  }, [stockName])
  useEffect(() => {
    setPrice(realTimePrices[realTimePrices.length - 1]?.p.toFixed(2))
  }, [realTimePrices])
  return (
    <Flex alignItems='center' justifyContent="space-between">
      <Flex>
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
      </Flex>
      <Flex justifySelf='flex-end' alignSelf="flex-end" direction="column">
        <Flex justifyContent="space-between">
          <Text>Price: {price ? `$${price}` : "N/A"}</Text>
          <FavoriteIcon />
        </Flex>
        <Box>
          <Tag variantColor="green" margin="0 10px 0 0">
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