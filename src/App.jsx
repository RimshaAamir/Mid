import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TopNav from './Components/TopNav';
import HomePage from './Pages/HomePage';
import FavoritesPage from './Pages/FavoritesPage';
import MovieDetailsPage from './Pages/MovieDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

