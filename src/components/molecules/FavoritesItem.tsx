import React, { useContext, FC, useEffect, useState } from 'react';
import { ListItem, Text, Divider, Flex } from '@chakra-ui/core';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import fetchStockQuote from '../../services/fetchStockQuote';

interface FavoritesItemProps {
  stockName: string;
}

const FavoritesItem: FC<FavoritesItemProps> = ({ stockName }) => {
  const { setStockName } = useContext(ActiveCompany);
  const [currentPrice, setCurrentPrice] = useState(0);
  useEffect(() => {
    fetchStockQuote(stockName).then((data) => {
      setCurrentPrice(data.c);
    });
  }, [stockName]);

  return (
    <ListItem onClick={() => setStockName(stockName)} cursor='pointer' _hover={{borderColor: "yellow.300", bg: "yellow.300" }}>
      <Flex justifyContent='space-between'>
        <Text>{stockName}</Text>
        <Text>{currentPrice}</Text>
      </Flex>
    </ListItem>
  );
};

export default FavoritesItem;
