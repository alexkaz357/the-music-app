import React, { useEffect, useState } from "react";

export default function ImageContainer({ selectedTrack }) {
  const [playTrack, setPlayTrack] = useState(false);

  useEffect(() => {
    setPlayTrack(false);
  }, [selectedTrack]);

  const play = () => {
    setPlayTrack(true);
  };

  return (
    <section className="player container">
      <p className="header">Select track, click the image to play it</p>
      {selectedTrack && selectedTrack.artwork_url ? (
        <img
          src={selectedTrack.artwork_url}
          alt=""
          className="clickable"
          onClick={play}
        />
      ) : (
        selectedTrack && (
          <img
            src={require("../../assets/img/default.png").default}
            alt=""
            className="clickable"
            onClick={play}
          />
        )
      )}
      {playTrack && (
        <div>
          <iframe
            title="player"
            width="100%"
            height="150"
            scrolling="no"
            frameBorder="no"
            src={`https://w.soundcloud.com/player/?visual=false&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F${selectedTrack.id}&show_artwork=false&auto_play=true`}
          ></iframe>
        </div>
      )}
    </section>
  );
}
