// src/Components/SearchBar.jsx
const SearchBar = ({ setSearchTerm }) => {
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    );
  };
  
  export default SearchBar;
  