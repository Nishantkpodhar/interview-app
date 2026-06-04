import React from "react";
import "./SearchBar.css";

function SearchBar({ searchText, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search question or answer..."
      className="search-box"
      value={searchText}
      onChange={onChange}
    />
  );
}

export default React.memo(SearchBar);
