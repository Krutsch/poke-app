import React from "react";
import "./Pokemon.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokemonJSON } from "./PokemonJSON";
import PokemonTemplate from "./PokemonTemplate";

function Pokemon({ identifier }: { identifier: number | string }) {
  const [pokemon, setPokemon] = useState<PokemonJSON | any>("");

  async function getPokemon(identifier: number | string) {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${identifier.toString().toLowerCase()}`
    );

    const pokemonData: PokemonJSON = await data
      .json()
      .catch(() => "Could not load your Pokémon!");
    setPokemon(pokemonData);
  }

  useEffect(() => {
    const timeout = setTimeout(() => getPokemon(identifier));
    return () => clearTimeout(timeout);
  }, [identifier]);

  return (
    <>
      {pokemon && (
        <Link
          className="pokemon"
          to={{ pathname: `/detail/${pokemon.name}`, state: pokemon }}
        >
          <PokemonTemplate pokemon={pokemon} />
        </Link>
      )}
    </>
  );
}

export default Pokemon;
