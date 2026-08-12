import { FaSearch } from "react-icons/fa";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box">
      <FaSearch />

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        aria-label="Search projects"
      />
    </div>
  );
}

export default SearchBar;