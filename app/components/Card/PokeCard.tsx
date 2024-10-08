import React from "react";
import Image from "next/image";
import PokeId from "../Label/PokeId";
import Link from "next/link";

export type PokeCardProps = {
  id: string;
  name: string;
  url: string;
  types: string[];
};

export default function PokeCard({ id, name, url, types }: PokeCardProps) {
  return (
    <div className="flex flex-col-reverse xl:flex-col items-center max-w-[120px] lg:max-w-[200px] gap-y-2 border border-gray-200 rounded">
      <Link href={`/pokemon/${id}`}>
        <Image src={url} alt="pokemon" width={200} height={200} />
      </Link>
      <PokeId id={id} name={name} types={types} />
    </div>
  );
}
