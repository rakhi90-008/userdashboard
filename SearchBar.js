import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
    />
  );
};

export default SearchBar;
