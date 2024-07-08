import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Pass the query to the parent component or function
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Product"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FaSearch className="search-icon" /> Search{" "}
      </button>{" "}
    </form>
  );
};

export default Search;
