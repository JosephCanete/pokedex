import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import usePokemonResponse from "../../transformer/usePokemonResponse";

export async function GET(_: NextRequest, context: { params: { id: string } }) {
  const { params } = context;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );

  const data = await response.json();
  return NextResponse.json(usePokemonResponse([data]));
}
