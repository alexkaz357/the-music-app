import React, { useEffect, useState } from "react";
import Search from "./Search";
import SearchController from "./SearchController";
import SearchResults from "./SearchResults";
import Loader from "../Loader";
import { musicService } from "../../services/musicService";

export default function SearchContainer({
  passSearchQuery,
  selectTrack,
  searchResultsFromRecentSearches,
}) {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedView, setSelectedView] = useState(musicService.loadView());

  useEffect(() => {
    setSearchResults(searchResultsFromRecentSearches);
  }, [searchResultsFromRecentSearches]);

  const passSearchResults = (tracks) => {
    setSearchResults(tracks);
  };

  const getNextTracks = async () => {
    setSearchResults(null);
    activateLoader();
    const nextTracks = await musicService.getNextTracks(
      searchResults.next_href
    );
    disableLoader();
    setSearchResults(nextTracks);
  };

  const activateLoader = () => {
    setIsLoading(true);
  };

  const disableLoader = () => {
    setIsLoading(false);
  };

  const changeView = (selectedView) => {
    musicService.changeView(selectedView);
    setSelectedView(selectedView);
  };

  return (
    <section className="container search-container">
      <p className="header">Type anything below to search</p>
      <div className="search-content flex column space-between">
        <div>
          <Search
            passSearchResults={passSearchResults}
            passSearchQuery={passSearchQuery}
            activateLoader={activateLoader}
            disableLoader={disableLoader}
          />
          {isLoading && <Loader />}
          {searchResults && (
            <SearchResults
              searchResults={searchResults}
              selectTrack={selectTrack}
              selectedView={selectedView}
            />
          )}
        </div>
        {searchResults && "next_href" in searchResults && (
          <div>
            <SearchController
              getNextTracks={getNextTracks}
              changeView={changeView}
            />
          </div>
        )}
      </div>
    </section>
  );
}
