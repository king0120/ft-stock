import React, { useContext, useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  Image,
  Text,
  Tag,
  TagLabel,
  Box,
  Skeleton,
} from '@chakra-ui/core';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import { useRealtimePrice } from '../../hooks/useRealTimePrice';
import FavoriteIcon from '../atoms/FavoriteIcon';
import fetchStockQuote from '../../services/fetchStockQuote';

const ActiveStockInfo = () => {
  const { stockName, companyInfo } = useContext(ActiveCompany);
  const [price, setPrice] = useState<string>('0');
  const realTimePrices = useRealtimePrice(stockName);

  useEffect(() => {
    fetchStockQuote(stockName).then((data) => setPrice(data.c));
  }, [stockName]);

  useEffect(() => {
    const mostRecentPrice = realTimePrices[realTimePrices.length - 1];
    if (mostRecentPrice) {
      setPrice(mostRecentPrice.p.toFixed(2));
    }
  }, [realTimePrices]);
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems='center'>
        <Skeleton isLoaded={!companyInfo.loading}>
          <Image
            maxW={60}
            maxH={60}
            src={
              companyInfo.logo ||
              'https://fedpractice.com/content/uploads/2018/03/placeholder.png'
            }
            alt={`${companyInfo.name} logo`}
          />
        </Skeleton>

        <Flex direction="column" m="5px">
          <Skeleton isLoaded={!companyInfo.loading}>
            <Heading as="h2" size="xl">
              {companyInfo.name || stockName}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!companyInfo.loading}>
            <Text>{companyInfo.ticker || "No Info Available"}</Text>
          </Skeleton>
        </Flex>
      </Flex>
      <Flex justifySelf="flex-end" alignSelf="flex-end" direction="column">
        <Skeleton isLoaded={!companyInfo.loading}>
          <Flex justifyContent="space-between">
            <Text fontSize="lg">Current: {price ? `$${price}` : 'N/A'}</Text>
            <FavoriteIcon />
          </Flex>
        </Skeleton>
        <Box>
          <Skeleton isLoaded={!companyInfo.loading}>
            <Tag variantColor="green" margin="0 10px 0 0">
              <TagLabel>{companyInfo.country}</TagLabel>
            </Tag>
            <Tag variantColor="teal">
              <TagLabel>{companyInfo.finnhubIndustry}</TagLabel>
            </Tag>
          </Skeleton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ActiveStockInfo;
