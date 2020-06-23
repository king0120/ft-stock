import React, { useContext, FC, useEffect, useState } from 'react';
import { ListItem } from '@chakra-ui/core';
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
    <ListItem>
      <a onClick={() => setStockName(stockName)}>{stockName}</a>
      {currentPrice}
    </ListItem>
  );
};

export default FavoritesItem;
