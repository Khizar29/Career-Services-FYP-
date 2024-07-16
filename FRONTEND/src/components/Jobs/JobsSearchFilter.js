// JobsSearchFilter.js
import React, { useState } from "react";
import "./JobsSearchFilter.css";

function JobsSearchFilter({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for jobs"
        className="search-input"
      />
      <button
        type="button"
        onClick={handleSearchClick}
        className="search-button"
      >
        Search
      </button>
    </div>
  );
}

export default JobsSearchFilter;
