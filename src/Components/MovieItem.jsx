// src/Components/MovieItem.jsx
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';  // Use the Favorites context

const MovieItem = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-200">
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <p className="text-sm text-gray-400">Release Date: {movie.releaseDate}</p>
      <p className="text-sm text-gray-400">Rating: {movie.rating}</p>
      <div className="mt-3 flex justify-between items-center">
        <Link
          to={`/movie/${movie.id}`}
          className="bg-green-500 text-white rounded-md px-4 py-2 text-sm hover:bg-green-600 transition-colors duration-200"
        >
          View Details
        </Link>
        <button
          onClick={() => (favorite ? removeFavorite(movie.id) : addFavorite(movie))}
          className="text-sm text-green-500 hover:text-green-400"
        >
          {favorite ? 'Unfavorite' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
