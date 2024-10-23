// src/Components/SearchBar.jsx
const SearchBar = ({ setSearchTerm }) => {
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={handleChange}
        />
      </div>
    );
  };
  
  export default SearchBar;
  