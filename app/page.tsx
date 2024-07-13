"use client";

import useSWR from "swr";
import PokeCard from "./components/Card/PokeCard";
import fetcher from "./utils/fetcher";
import { type Pokemon } from "./types/pokemon";

// Your component code
export default function Home() {
  const { data: pokemon, isLoading } = useSWR("/api/pokemon", fetcher) as {
    data: Pokemon[];
    isLoading: boolean; // Add the 'isLoading' property to the type definition
  };

  return (
    <div className="flex flex-wrap gap-4">
      {!isLoading &&
        pokemon.map((item) => <PokeCard key={item.id} {...item} />)}
    </div>
  );
}
