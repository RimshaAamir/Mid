// src/Components/MovieList.jsx
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.length > 0 ? (
        movies.map(movie => <MovieItem key={movie.id} movie={movie} />)
      ) : (
        <p className="col-span-full text-center text-white">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
