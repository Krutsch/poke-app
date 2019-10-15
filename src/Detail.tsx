import React from "react";
import "./Pokemon.css";
import "./Detail.css";
import PokemonTemplate from "./PokemonTemplate";
import { useState } from "react";
import { PokemonJSON } from "./PokemonJSON";

function Detail(props: { location: { state?: any; pathname?: any } }) {
  const { state: passedPokemon } = props.location;
  const [pokemon, setPokemon] = useState<PokemonJSON>(passedPokemon || 0);

  async function getPokemon(identifier: number | string) {
    setPokemon(
      await (await fetch(
        `https://pokeapi.co/api/v2/pokemon/${identifier
          .toString()
          .toLowerCase()}`
      ))
        .json()
        .catch(() => 0)
    );
  }
  console.log(pokemon);

  if (!pokemon) {
    getPokemon(props.location.pathname.split("/").pop());
  }
  const output = (
    <div className="pokemon detail">
      <PokemonTemplate pokemon={pokemon} />
    </div>
  );

  return <>{pokemon ? output : "We could not find your Pokémon ..."}</>;
}
export default Detail;
