import { useState, useEffect } from 'react';
import MovieList from '../Components/MovieList';
import SearchBar from '../Components/SearchBar';
import moviesData from '../data/movies.json'; // Simulated data source, replace with API if needed.

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  // useEffect for fetching data on component mount or when the search term changes
  useEffect(() => {
    // Simulate fetching initial data (could be replaced with an API call)
    const fetchMovies = async () => {
      try {
        // Assuming moviesData is the initial data. Replace this with an API call.
        const filteredMovies = moviesData.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchTerm]); // Run this effect whenever the searchTerm changes

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Movie Explorer</h2>
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
