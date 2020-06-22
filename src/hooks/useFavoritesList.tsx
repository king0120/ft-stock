export default function useFavoritesList(){
  const favorites = JSON.parse(localStorage.getItem('favorites-list') || "[]")
  
  function setFavorites(newFavorite: string){ 
    const favorites: string[] = JSON.parse(localStorage.getItem('favorites-list') || "[]")
    localStorage.setItem('favorites-list', JSON.stringify([...favorites, newFavorite]))
  }

  return [favorites, setFavorites]
}