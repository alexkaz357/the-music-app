import React, { useState } from "react";
import ImageContainer from "../cmps/player/ImageContainer";
import RecentSearchesContainer from "../cmps/recent/RecentSearchesContainer";
import SearchContainer from "../cmps/search/SearchContainer";
import { musicService } from "../services/musicService";

export default function MusicApp() {
  const [searchQueries, setSearchQueries] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [
    searchResultsFromRecentSearches,
    setSearchResultsFromRecentSearches,
  ] = useState(null);

  const passSearchQuery = (searchQuery) => {
    if (searchQueries.includes(searchQuery)) return;
    const queries = [...searchQueries];
    queries.unshift(searchQuery);
    if (queries.length > 5) queries.pop();
    setSearchQueries(queries);
  };

  const deleteSearchItem = (e, item) => {
    e.stopPropagation();
    const itemToRemoveIdx = searchQueries.findIndex(searchQuery => searchQuery === item)
    const searches = [...searchQueries];
    searches.splice(itemToRemoveIdx, 1);
    setSearchQueries(searches);
  };

  const clearSearchHistory = () => {
    setSearchQueries([]);
  }

  const selectTrack = (selectedTrack) => {
    setSelectedTrack(selectedTrack);
  };

  const initiateSearchFromRecentSearches = async (query) => {
    const tracks = await musicService.getTracks(query);
    setSearchResultsFromRecentSearches(tracks);
  };

  return (
    <section className="main-container flex space-between align-center">
      <SearchContainer
        passSearchQuery={passSearchQuery}
        selectTrack={selectTrack}
        searchResultsFromRecentSearches={searchResultsFromRecentSearches}
      />
      <ImageContainer selectedTrack={selectedTrack} />
      <RecentSearchesContainer
        searchQueries={searchQueries}
        initiateSearchFromRecentSearches={initiateSearchFromRecentSearches}
        deleteSearchItem={deleteSearchItem}
        clearSearchHistory={clearSearchHistory}
      />
    </section>
  );
}
