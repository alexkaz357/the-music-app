import React from "react";

export default function RecentSearchesContainer({
  searchQueries,
  initiateSearchFromRecentSearches,
  deleteSearchItem,
  clearSearchHistory
}) {
  return (
    <section className="container recent-searches">
      <div className="flex space-between">
        <p className="header">Recent Searches</p>
        {searchQueries.length !== 0 && <p className="clear" onClick={clearSearchHistory}>Clear all</p>}
      </div>
      {searchQueries.map((searchQuery, idx) => (
        <div
          key={searchQuery}
          className="search-query item flex space-between align-center clickable"
          onClick={() => initiateSearchFromRecentSearches(searchQuery)}
        >
          <p>{searchQuery}</p>
          <p
            className="delete"
            onClick={(e) => deleteSearchItem(e, searchQuery)}
          >
            &times;
          </p>
        </div>
      ))}
    </section>
  );
}
