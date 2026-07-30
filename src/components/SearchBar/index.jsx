import React from "react";
import "./SearchBar.css";

function SearchBar({ searchText, onChange, onClear }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search question or answer..."
        className="search-box"
        value={searchText}
        onChange={onChange}
      />
      {searchText && (
        <button
          type="button"
          className="clear-search-btn"
          aria-label="Clear search"
          onClick={onClear}
        >
          ×
        </button>
      )}
    </div>
  );
}

export default React.memo(SearchBar);
