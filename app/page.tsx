"use client";

import useSWR from "swr";
import PokeCard from "./components/Card/PokeCard";
import fetcher from "./utils/fetcher";
import { useState } from "react";
import axios from "axios";
import { type ProcessedPokeResponse } from "./api/transformer/usePokemonResponse";
import LoadMore from "./utils/LoadMore";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";

export default function Home() {
  const { data: pokemon, isLoading } = useSWR("/api/pokemon", fetcher) as {
    data: ProcessedPokeResponse[];
    isLoading: boolean;
  };

  const [offset, setOffset] = useState(50);
  const [moreData, setMoreData] = useState<ProcessedPokeResponse[]>([]);
  const handleLoadMore = async () => {
    console.log("Load more");
    setOffset((prevOffset) => prevOffset + 50);
    axios.get(`/api/pokemon?offset=${offset}`).then((res) => {
      setMoreData((prevData) => [...prevData, ...res.data]);
    });
    console.log(offset);
  };

  return isLoading ? (
    <Loading loading={isLoading} />
  ) : (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-wrap justify-center lg:justify-center gap-4 mx-4">
        {!isLoading &&
          [...pokemon, ...moreData].map((item) => (
            <PokeCard key={`${item.name}-${item.id}`} {...item} />
          ))}
      </div>
      <LoadMore initLoadMore={handleLoadMore} />
    </div>
  );
}
