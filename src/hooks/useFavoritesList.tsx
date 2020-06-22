import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"


export default function useFavoritesList(){
  const { favorites, setFavorites } = useContext(FavoritesContext)
  
  function addFavorite(newFavorite: string){ 
    const favLocal: string[] = JSON.parse(localStorage.getItem('favorites-list') || "[]")
    localStorage.setItem('favorites-list', JSON.stringify([...favLocal, newFavorite]))
    
    setFavorites([...favLocal, newFavorite])
  }

  function removeFavorite(favoriteToRemove: string){ 
    const newFavorites = favorites.filter((val) => val !== favoriteToRemove)
    localStorage.setItem('favorites-list', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  return {
    favorites, 
    addFavorite, 
    removeFavorite
  }
}