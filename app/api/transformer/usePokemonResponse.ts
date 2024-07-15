import { Pokemon, PokeType } from "@/app/types/pokemon";
/**
 * A custom hook that transforms the response from the Pokemon API.
 *
 * @returns {void}
 *
 */

export type ProcessedPokeResponse = {
  id: string;
  name: string;
  weight: number;
  base_experience: number;
  url: string;
  gif: string;
  types: string[];
};

export default function usePokemonResponse(
  data: Pokemon[]
): ProcessedPokeResponse[] {
  return data.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      weight: pokemon.weight,
      base_experience: pokemon.base_experience,
      url: pokemon.sprites.other["official-artwork"].front_shiny,
      gif: pokemon.sprites.other["showdown"].front_default,
      types: pokemon.types.map((type) => type.type.name as PokeType),
    };
  });
}
