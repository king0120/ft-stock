import { Box } from '@chakra-ui/core';
import React, { useContext } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import useFavoritesList from '../../hooks/useFavoritesList';
import { ActiveCompany } from '../../context/ActiveCompanyContext';

const FavoriteIcon = () => {
  const { stockName } = useContext(ActiveCompany);
  const { favorites, addFavorite, removeFavorite } = useFavoritesList();

  if (favorites.includes(stockName)) {
    return (
      <Box
        size="2rem"
        color="yellow.300"
        as={AiFillStar}
        onClick={() => {
          removeFavorite(stockName);
        }}
      />
    );
  } else {
    return (
      <Box
        size="2rem"
        color="yellow.300"
        as={AiOutlineStar}
        onClick={() => {
          addFavorite(stockName);
        }}
      />
    );
  }
};

export default FavoriteIcon;
