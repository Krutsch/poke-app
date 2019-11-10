import React from "react";
import { likeFavorite } from "./FavoriteService";
import { PokemonJSON } from "../PokemonJSON";
import Heart from "./Heart";

function PokemonTemplate({ pokemon }: { pokemon: PokemonJSON }) {
  return (
    <>
      <img
        alt={pokemon.name}
        aria-label={pokemon.name}
        src={pokemon.sprites.front_default}
        width="96"
        height="96"
      />

      <div className="pokemon-info">
        <p className="id">
          <span className="number-prefix">Nr. </span>
          {pokemon.id.toString().padStart(3, "0")}
        </p>

        <span
          className="heart-svg"
          onClick={e => likeFavorite(e, pokemon.id.toString())}
        >
          <Heart
            class={
              (window.localStorage.getItem("favorites") || "").includes(
                pokemon.id.toString()
              ) && "heart"
            }
          />
        </span>

        <p className="name">{pokemon.name}</p>

        {pokemon.types.map((item, i) => (
          <div key={i} className="abilities">
            <span className="pill background-color-grass">
              {item.type.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default PokemonTemplate;
