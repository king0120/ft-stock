import React from 'react';
import { List, Heading, Divider, Box } from '@chakra-ui/core';
import useFavoritesList from '../../hooks/useFavoritesList';
import FavoritesItem from '../molecules/FavoritesItem';

const Favorites = () => {
  const { favorites } = useFavoritesList();
  return (
    <Box height={'50vh'} width={['100%', '100%', '25%']} padding="5px" overflow='scroll'>
      <Heading as="h3">Favorites: </Heading>
      <List spacing={4}>
        {favorites.length ? (
          favorites.map((fav: string, index: number) => (
            <>
              <FavoritesItem key={fav} stockName={fav} />
              {index !== favorites.length - 1 && <Divider />}
            </>
          ))
        ) : (
          <div>No Favorites Exist</div>
        )}
      </List>
    </Box>
  );
};

export default Favorites;
