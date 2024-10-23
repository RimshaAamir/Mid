// src/Components/MovieItem.jsx
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieItem;
