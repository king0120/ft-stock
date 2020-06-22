import React, { useEffect, useContext } from 'react';
import { List, ListItem, Heading } from '@chakra-ui/core';
import useFavoritesList from '../../hooks/useFavoritesList';
import { ActiveCompany } from '../../context/ActiveCompanyContext';
import FavoritesItem from '../molecules/FavoritesItem';

const Favorites = () => {
  
  const {favorites} = useFavoritesList()
  return (
    <div>
      <Heading as='h3'>Favorites: </Heading>
      <List spacing={4}>
        {favorites.length ? 
          favorites.map((fav: string) => <FavoritesItem key={fav} stockName={fav}/>)
          : (
            <div>No Favorites Exist</div>
          )
        }
      </List>
    </div>
  );
};

export default Favorites;