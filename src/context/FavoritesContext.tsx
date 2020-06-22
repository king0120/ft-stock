import React, { useState, FC, useEffect } from 'react';

export const FavoritesContext = React.createContext({
  favorites: [] as string[],
  setFavorites: (s: string[]) => {},
});

export const FavoritesProvider: FC = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites-list') || '[]'),
  );

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites } as any}>
      {children}
    </FavoritesContext.Provider>
  );
};
