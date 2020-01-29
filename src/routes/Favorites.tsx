import React, { useState, useEffect } from "react";
import "../styles/Favorites.css";
import Pokemon from "../components/Pokemon";

function Favorites() {
  const [favorites, setFavorites] = useState<Array<string> | null>(null);

  useEffect(() => {
    const favStorage = window.localStorage.getItem("favorites") || "";
    const favs = Array.from(favStorage.split(" ")).filter(fav => !!fav);
    setFavorites(favs);
  }, []);

  return (
    <div className="favorite">
      {favorites !== null && favorites.length
        ? favorites.map(name => (
            <Pokemon key={name} identifier={name}></Pokemon>
          ))
        : "You selected no Favorites yet!"}
    </div>
  );
}
Favorites.whyDidYouRender = true;
export default Favorites;
