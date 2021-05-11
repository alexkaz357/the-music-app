import React, { useState } from "react";
import { musicService } from "../../services/musicService";

export default function SearchController({ getNextTracks, changeView }) {
  const [selectedView, setSelectedView] = useState(musicService.loadView());

  const setView = (selectedView) => {
    setSelectedView(selectedView);
  };

  return (
    <section className="search-controller flex space-between align-center">
      <div>
        <i
          className="fas fa-long-arrow-alt-right arrow"
          onClick={getNextTracks}
        ></i>
      </div>
      <div>
        <i
          className={`fas fa-list list ${
            selectedView === "list" ? "selected" : ""
          }`}
          onClick={() => {
            changeView("list");
            setView("list");
          }}
        ></i>
        <i
          className={`fas fa-th tile ${
            selectedView === "tile" ? "selected" : ""
          }`}
          onClick={() => {
            changeView("tile");
            setView("tile");
          }}
        ></i>
      </div>
    </section>
  );
}
