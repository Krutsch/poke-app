import React from "react";
import "./Pokemon.css";
import "./Detail.css";
import Heart from "./Heart";
import { useState } from "react";
import { PokemonJSON } from "./PokemonJSON";
import { likeFavorite } from "./FavoriteService";

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

  if (!pokemon) {
    getPokemon(props.location.pathname.split("/").pop());
  }
  const output = (
    <div className="pokemon detail">
      <img
        alt={pokemon.name}
        aria-label={pokemon.name}
        src={(pokemon.sprites && pokemon.sprites.front_default) || ""}
      />

      <div className="pokemon-info">
        <p className="id">
          <span className="number-prefix">Nr. </span>
          {pokemon.id}
        </p>
        <span
          className="heart-svg"
          onClick={e => likeFavorite(e, pokemon.name)}
        >
          <Heart
            class={
              (window.localStorage.getItem("favorites") || "").includes(
                pokemon.name
              ) && "heart"
            }
          />
        </span>
        <p className="name">{pokemon.name}</p>

        <div className="abilities">
          <span className="pill background-color-grass">Pflanze</span>
        </div>
        <div className="abilities2">
          <span className="pill background-color-poison">Gift</span>
        </div>
      </div>
    </div>
  );

  return <>{pokemon ? output : "We could not find your Pokémon ..."}</>;
}
export default Detail;
