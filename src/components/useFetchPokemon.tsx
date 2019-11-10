import { useState, useEffect } from "react";
import { PokemonJSON } from "../PokemonJSON";

function useFetchPokemon(
  identifier: string | number,
  pokemonData: PokemonJSON
) {
  const [pokemon, setPokemon] = useState<PokemonJSON>(null as any);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (pokemonData) {
      return setPokemon(pokemonData);
    }

    const timeout = setTimeout(async () => {
      try {
        const pokeData = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${identifier
            .toString()
            .toLowerCase()}`
        );
        setPokemon(await pokeData.json());
      } catch {
        setError(true);
      }
    });

    return () => clearTimeout(timeout);
  }, [identifier, error, pokemonData]);

  return { error, pokemon };
}
export default useFetchPokemon;
