import { PokeType } from "@/app/types/pokemon";
import RenderIcon from "@/app/utils/RenderIcon";

export default function PokeId({
  id,
  name,
  types,
}: {
  id: string;
  name: string;
  types: string[];
}) {
  console.log({ types });
  return (
    <div className="flex items-center border rounded-xl bg-gray-100 px-2 py-1 gap-2 mb-2">
      <RenderIcon type={types} />
      <span className="text-white-100 text-xs capitalize">
        {name} #{id}
      </span>
    </div>
  );
}
