import React from "react";
import "../styles/Pokemon.css";
import { Link } from "react-router-dom";
import PokemonTemplate from "./PokemonTemplate";
import useFetchPokemon from "./useFetchPokemon";

function Pokemon({ identifier }: { identifier: number | string }) {
  const { error, pokemon } = useFetchPokemon(identifier);

  return (
    <>
      {!error && pokemon && (
        <Link className="pokemon" to={`/detail/${pokemon.name}`}>
          <PokemonTemplate pokemon={pokemon} />
        </Link>
      )}
    </>
  );
}

export default Pokemon;
