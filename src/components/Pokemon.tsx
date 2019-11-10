import React from "react";
import "../styles/Pokemon.css";
import { Link } from "react-router-dom";
import PokemonTemplate from "./PokemonTemplate";
import useFetchPokemon from "./useFetchPokemon";

function Pokemon({ identifier }: { identifier: number | string }) {
  const { error, pokemon } = useFetchPokemon(identifier, null as any);

  return (
    <>
      {!error && pokemon && (
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
