import React from "react";
import Pokemon from "./Pokemon";
import { useState, useEffect } from "react";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState<Array<string>>([]);

  useEffect(() => {
    const favStorage = window.localStorage.getItem("favorites") || "";
    const favs = Array.from(favStorage.split(" ")).filter(fav => !!fav);
    setFavorites(favs);
  }, []);
  return (
    <div className="favorite">
      {!favorites.length && "You selected no Favorites yet!"}

      {favorites.map((name, index) => (
        <Pokemon key={index} identifier={name}></Pokemon>
      ))}
    </div>
  );
}

export default Favorites;
