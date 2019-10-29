import React from "react";
import "./Pokemon.css";
import "./Detail.css";
import PokemonTemplate from "./PokemonTemplate";
import { useState } from "react";
import { PokemonJSON } from "./PokemonJSON";

function Detail(props: { location: { state?: any; pathname?: any } }) {
  const { state: passedPokemon } = props.location || "";
  const [pokemon, setPokemon] = useState<PokemonJSON>(passedPokemon);
  const [error, setError] = useState<boolean>(false);

  async function getPokemon(identifier: number | string) {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${identifier.toString().toLowerCase()}`
    )
      .then(data => data.json())
      .catch(() => setError(true))
      .then(pokemonData => {
        if (!error) setPokemon(pokemonData);
      });
  }

  if (!pokemon) {
    getPokemon(props.location.pathname.split("/").pop());
  }

  return (
    <>
      {pokemon ? (
        <div className="pokemon detail">
          <PokemonTemplate pokemon={pokemon} />
        </div>
      ) : error ? (
        "Could not load your Pokemon ..."
      ) : (
        "Loading your Pokemon ..."
      )}
    </>
  );
}
export default Detail;
