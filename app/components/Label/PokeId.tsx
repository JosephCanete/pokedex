import RenderIcon from "@/app/utils/RenderIcon";

export type PokeIdProps = {
  id: string;
  name: string;
  types: string[];
};

export default function PokeId({ id, name, types }: PokeIdProps) {
  return (
    <div className="flex items-center border rounded-xl bg-gray-100 px-2 py-1 gap-2 mb-2">
      <RenderIcon types={types} />
      <span className="text-white-100 text-xs capitalize">
        {name} #{id}
      </span>
    </div>
  );
}
