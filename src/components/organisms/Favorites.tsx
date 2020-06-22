import React from 'react';
import { List, ListItem, Heading } from '@chakra-ui/core';
import useFavoritesList from 'src/hooks/useFavoritesList';

const Favorites = () => {
  const [favorites, setFavorites] = useFavoritesList()
  return (
    <div>
      <Heading as='h3'>Favorites: </Heading>
      <List spacing={4}>
        {favorites.length ? 
          favorites.map((fav: string) => (
            <ListItem key={fav}>
              {fav}
            </ListItem>
          )) :
          (
            <div>No Favorites Exist</div>
          )
        }
      </List>
    </div>
  );
};

export default Favorites;