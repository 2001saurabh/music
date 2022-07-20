import React from "react";
import SideBar from "./component/SideBar";
import TopSongs from "./component/TopSongs";
import TopArtist from "./component/TopArtist";
import AddSong from "./component/AddSong";

function Home() {
  return (
    <SideBar
      song={<TopSongs />}
      artist={<TopArtist />}
    ></SideBar>
  );
}

export default Home;
