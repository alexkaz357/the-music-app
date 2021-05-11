import React, { useState } from "react";
import { musicService } from "../../services/musicService";

export default function Search({
  passSearchResults,
  passSearchQuery,
  activateLoader,
  disableLoader,
}) {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    const value = target.value;
    setSearch(value);
  };

  const initiateSearch = async (e) => {
    if (!search) return;
    if (e.key === "Enter" || e.type === "click") {
      passSearchQuery(search);
      resetInput();
      activateLoader();
      const tracks = await musicService.getTracks(search);
      disableLoader();
      passSearchResults(tracks);
    }
  };

  const resetInput = () => {
    setSearch("");
  };

  return (
    <section className="search">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Find track"
        autoComplete="off"
        onChange={handleChange}
        onKeyUp={initiateSearch}
      />
      <i className="fas fa-search search-icon" onClick={initiateSearch}></i>
    </section>
  );
}
