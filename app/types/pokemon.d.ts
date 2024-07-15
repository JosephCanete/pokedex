export type PokeType =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dark"
  | "dragon"
  | "steel"
  | "fairy";

export type Pokemon = {
  id: string;
  name: string;
  weight: number;
  base_experience: number;
  url: string;
  sprites: {
    other: {
      "official-artwork": {
        front_shiny: string;
      };
      showdown: {
        front_default: string;
      };
    };
  };
  types: {
    type: { name: string };
  }[];
};
