"use client";
import { ProcessedPokeResponse } from "@/app/api/transformer/usePokemonResponse";
import fetcher from "@/app/utils/fetcher";
import useSWR from "swr";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import RenderIcon from "@/app/utils/RenderIcon";
import Loading from "@/app/components/Loading/Loading";

export default function PokemonDetails() {
  const pathname = usePathname() as string;
  const id = pathname.split("/")[2];
  const router = useRouter();

  const { data: pokemon, isLoading } = useSWR(
    `/api/pokemon/${id}`,
    fetcher
  ) as {
    data: ProcessedPokeResponse[];
    isLoading: boolean;
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center my-auto h-full w-full text-white-100">
        {isLoading ? (
          <Loading loading={isLoading} />
        ) : (
          <>
            <button
              onClick={() => router.push("/")}
              type="button"
              className="text-white-100 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-white-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Back
            </button>
            <h1 className="capitalize text-4xl">{pokemon[0].name}</h1>
            <Image
              unoptimized
              src={pokemon[0].url}
              alt={pokemon[0].name}
              width={500}
              height={500}
            />
            <p>Weight: {pokemon[0].weight}</p>
            <p>Base Experience: {pokemon[0].base_experience}</p>
            <div className="flex items-center gap-3">
              <p className="capitalize inline">
                Types: {pokemon[0].types.join(", ")}{" "}
              </p>
              <RenderIcon types={pokemon[0].types} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
