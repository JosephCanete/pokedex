"use client";

import useSWR from "swr";
import PokeCard from "./components/Card/PokeCard";
import fetcher from "./utils/fetcher";
import { type Pokemon } from "./types/pokemon";

export default function Home() {
  const { data: pokemon, isLoading } = useSWR("/api/pokemon", fetcher) as {
    data: Pokemon[];
    isLoading: boolean;
  };

  return (
    <div className="flex flex-wrap justify-center lg:justify-normal gap-4 mx-4">
      {!isLoading &&
        // @ts-ignore
        pokemon.map((item) => <PokeCard key={item.id} {...item} />)}
    </div>
  );
}
