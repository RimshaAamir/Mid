// src/context/FavoritesContext.jsx
import { createContext, useContext, useState } from 'react';

// Create the Favorites Context
const FavoritesContext = createContext();

// Create a custom hook for using the Favorites context
export const useFavorites = () => useContext(FavoritesContext);

// Provider component to wrap your app and manage favorites state
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Add a movie to favorites
  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  // Remove a movie from favorites
  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== id));
  };

  // Check if a movie is in the favorites
  const isFavorite = (id) => favorites.some((movie) => movie.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
