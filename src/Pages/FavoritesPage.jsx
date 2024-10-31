// src/Pages/FavoritesPage.jsx
import { useFavorites } from '../context/FavoritesContext';
import MovieList from '../Components/MovieList';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p className="text-center">You have no favorite movies yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
