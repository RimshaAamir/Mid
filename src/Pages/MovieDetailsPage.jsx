
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  // Capture the movie ID from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Details Page</h1>
      <p>Displaying details for movie ID: {id}</p>
    </div>
  );
};

export default MovieDetailsPage;
