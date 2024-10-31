// src/Components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left Nav */}
        <nav className="space-x-6 text-lg">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/favorites" className="hover:text-green-400 transition">Favorites</Link>
        </nav>

        {/* Center Title */}
        <h1 className="text-3xl font-bold text-center">Movie Explorer</h1>

        {/* Right Nav */}
        <nav className="space-x-6 text-lg">
          <Link to="#" className="hover:text-green-400 transition">Browse</Link>
          <Link to="#" className="hover:text-green-400 transition">Contact</Link>
        </nav>
      </div>    
    </header>
  );
};

export default Header;
