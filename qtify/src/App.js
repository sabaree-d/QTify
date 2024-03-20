//components
import Card from "./component/Card/Card";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Section from "./component/Section/Section";
//dependencies
import axios from "axios";
//contexts
import { AlbumContext } from "./Contexts/albumContext";

//styles
import "./App.css";
import FAQ from "./component/FAQ/FAQ";
import Album from "./component/Album/Album";
import { useEffect, useState } from "react";
import Player from "./component/Player/Player";

function App() {
  //states
  const [albumData, setAlbumData] = useState();
  const [topAlbums, setTopAlbums] = useState();
  const [newAlbums, setNewAlbums] = useState();
  const [allSongs, setAllSongs] = useState();
  // side effects
  useEffect(() => {
    loadCards("top");
    loadCards("new");
    loadCards("songs");
  }, []);
  // functions
  const loadCards = (type) => {
    let dataFromLocal;
    //search data in local before retrieving from server
    switch (type) {
      case "top":
        dataFromLocal = JSON.parse(localStorage.getItem("topAlbums"));
        if(dataFromLocal) setTopAlbums(dataFromLocal);
        break;
      case "new":
        dataFromLocal = JSON.parse(localStorage.getItem("newAlbums"));
        if(dataFromLocal) setNewAlbums(dataFromLocal);
        break;
      case "songs":
        dataFromLocal = JSON.parse(localStorage.getItem("allSongs"));
        if(dataFromLocal) setAllSongs(dataFromLocal);
        break;
    }
    // retrieve from server in not found in local
    if (!dataFromLocal) {
      console.log("type: ", type, "retrieving from server");
      fetchAlbums(type);
    }
  };
  const fetchAlbums = async (type) => {
    console.log("fetching....");
    let param = `albums/${type}`;
    if (type === "songs") param = "songs";
    const url = `https://qtify-backend-labs.crio.do/${param}`;
    try {
      const response = await axios.get(url);
      //save to state and localStorage
      switch (type) {
        case "top":
          setTopAlbums(response.data);
          localStorage.setItem("topAlbums", JSON.stringify(response.data));
          break;
        case "new":
          setNewAlbums(response.data);
          localStorage.setItem("newAlbums", JSON.stringify(response.data));
          break;
        case "songs":
          setAllSongs(response.data);
          localStorage.setItem("allSongs", JSON.stringify(response.data));
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App" id="App">
      <AlbumContext.Provider value={[albumData, setAlbumData]}>
        <Navbar />
        <Hero />

        {/* top albums */}
        <Section type="top" cardsArray={topAlbums} />

        {/* new albums */}
        <Section type="new" cardsArray={newAlbums} />

        {/* all songs with genre */}
        <Section type="songs" cardsArray={allSongs} />

        <FAQ />

        {albumData ? <Album /> : null}
        {/* <Album /> */}
        <Player />
      </AlbumContext.Provider>
    </div>
  );
}

export default App;
