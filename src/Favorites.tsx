import React from "react";
import Pokemon from "./Pokemon";
import { useState, useEffect } from "react";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState<Array<string> | null>(null);

  useEffect(() => {
    const favStorage = window.localStorage.getItem("favorites") || "";
    const favs = Array.from(favStorage.split(" ")).filter(fav => !!fav);
    setFavorites(favs);
  }, []);

  return (
    <div className="favorite">
      {favorites !== null &&
        (favorites.length
          ? favorites.map(name => (
              <Pokemon key={name} identifier={name}></Pokemon>
            ))
          : "You selected no Favorites yet!")}
    </div>
  );
}

export default Favorites;
