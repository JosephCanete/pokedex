import Pokedex from "pokedex-promise-v2";

export default async function pokedex() {
  const pokemon = new Pokedex();
  return pokemon;
}
