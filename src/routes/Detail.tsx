import React, { useState, useEffect } from "react";
import "../styles/Pokemon.css";
import "../styles/Detail.css";
import PokemonTemplate from "../components/PokemonTemplate";
import useFetchPokemon from "../components/useFetchPokemon";

function Detail(props: { location: { state?: any; pathname?: any } }) {
  let { error, pokemon } = useFetchPokemon(
    props.location.pathname.split("/").pop(),
    props.location.state
  );
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
