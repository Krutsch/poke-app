import React, { useState, useEffect } from "react";
import "../styles/Pokemon.css";
import "../styles/Detail.css";
import PokemonTemplate from "../components/PokemonTemplate";
import useFetchPokemon from "../components/useFetchPokemon";
//@ts-ignore
// eslint-disable-next-line
import { useLocation } from "react-router-dom";

function Detail() {
  const location: { state: any; pathname: any } = useLocation();
  let { error, pokemon } = useFetchPokemon(location.pathname.split("/").pop(), location.state);
  const [displayLoad, setDisplayLoad] = useState("");

  useEffect(() => {
    const timeout = setTimeout(setDisplayLoad, 100, "Loading your Pokemon ...");
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {pokemon ? (
        <div className="pokemon detail">
          <PokemonTemplate pokemon={pokemon} />
        </div>
      ) : error ? (
        "Could not load your Pokemon ..."
      ) : (
        displayLoad
      )}
    </>
  );
}
Detail.whyDidYouRender = true;
export default Detail;
