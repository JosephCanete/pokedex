import { PokeType } from "@/app/types/pokemon";
import RenderIcon from "@/app/utils/RenderIcon";

export default function PokeId({
  id,
  name,
  type,
}: {
  id: string;
  name: string;
  type: PokeType[];
}) {
  return (
    <div className="flex items-center border rounded-xl bg-gray-100 px-2 py-1 gap-2 mb-2">
      <RenderIcon type={type[0]} />
      <span className="text-white-100 text-xs capitalize">
        {name} #{id}
      </span>
    </div>
  );
}
