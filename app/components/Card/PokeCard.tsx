import React from "react";
import Image from "next/image";
import PokeId from "../Label/PokeId";
import Link from "next/link";
import { PokeType } from "@/app/types/pokemon";

export type PokeCardProps = {
  id: string;
  name: string;
  url: string;
  types: PokeType[];
};

export default function PokeCard({ id, name, url, types }: PokeCardProps) {
  console.log({ types });
  return (
    <div className="flex flex-col max-w-[200px] gap-y-2 items-center border border-black-100 rounded">
      <Link href={`/pokemon/${id}`}>
        <Image src={url} alt="pokemon" width={200} height={200} />
      </Link>
      <PokeId id={id} name={name} type={types} />
    </div>
  );
}