import { NextResponse, NextRequest } from "next/server";
import pokedex from "../pokedex";
import usePokemonResponse from "../transformer/usePokemonResponse";

export async function GET(
  request: any,
  context: { params: { offset: number } }
) {
  const instance = await pokedex();
  const queryParam = request.url;
  const { results } = await instance.getPokemonsList({
    limit: 500,
  });

  const pokeList = await Promise.all(
    results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    })
  );

  return NextResponse.json(usePokemonResponse(pokeList));
}
