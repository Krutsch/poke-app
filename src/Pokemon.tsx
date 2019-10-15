import React from "react";
import "./Pokemon.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokemonJSON } from "./PokemonJSON";
import { likeFavorite } from "./FavoriteService";
import Heart from "./Heart";

function Pokemon({ identifier }: { identifier: number | string }) {
  const [pokemon, setPokemon] = useState<PokemonJSON>({} as PokemonJSON);

  useEffect(() => {
    async function getPokemon(identifier: number | string) {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${identifier
          .toString()
          .toLowerCase()}`
      );
      const pokemonData: PokemonJSON = await data
        .json()
        .catch(() => "Could not load your Pokémon!");
      pokemonData.id = pokemonData.id.toString().padStart(3, "0");
      setPokemon(pokemonData);
    }
    getPokemon(identifier);
  }, [identifier]);

  return (
    <Link
      className="pokemon"
      to={{ pathname: `/detail/${pokemon.name}`, state: pokemon }}
    >
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
    </Link>
  );
}

export default Pokemon;
