import React from "react";
import MusicApp from "./pages/MusicApp";

export default function App() {
  return (
    <section className="music-app">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <h1 className="logo">TheMusicApp</h1>
      <MusicApp />
    </section>
  );
}
