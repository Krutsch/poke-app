export interface PokemonJSON {
  abilities: Array<object>;
  base_experience: number;
  forms: Array<object>;
  game_indices: Array<object>;
  height: number;
  held_items: Array<any>;
  id: String;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<object>;
  name: string;
  order: number;
  species: object;
  sprites: {
    front_default: string;
  };
  stats: Array<object>;
  types: Array<object>;
  weight: number;
}
