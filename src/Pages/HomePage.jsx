import { useState } from 'react';
import MovieList from '../Components/MovieList';
import SearchBar from '../Components/SearchBar';
import moviesData from '../data/movies.json'; // Import the JSON data

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Filter movies based on search term
  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); 

  return (
    <div>
      <h2>Home Page</h2>
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default HomePage;
