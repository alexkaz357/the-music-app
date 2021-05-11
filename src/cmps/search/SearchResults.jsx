import React from "react";

export default function SearchResults({
  searchResults,
  selectTrack,
  selectedView,
}) {
  return (
    <section
      className={`search-results ${selectedView === "list" ? "list" : "tile"}`}
    >
      {searchResults.collection.map((result) => (
        <p
          key={result.id}
          className="item clickable"
          onClick={() => selectTrack(result)}
        >
          {result.title.length > 30
            ? result.title.slice(0, 30) + "..."
            : result.title}
        </p>
      ))}
    </section>
  );
}
