import { useState, useEffect } from "react";
import { PokemonJSON } from "../PokemonJSON";

function useFetchPokemon(identifier: string | number) {
  const [pokemon, setPokemon] = useState<PokemonJSON>(null as any);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
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
  }, [identifier, error]);

  return { error, pokemon };
}
export default useFetchPokemon;
