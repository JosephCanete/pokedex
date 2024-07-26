import RenderIcon from "@/app/utils/RenderIcon";

export type PokeIdProps = {
  id: string;
  name: string;
  types: string[];
};

export default function PokeId({ id, name, types }: PokeIdProps) {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center border rounded-xl bg-gray-100 px-2 py-1 xl:gap-2 mt-2 xl:mb-2 max-w-[100px] xl:max-w-[150px]">
      <RenderIcon types={types} />
      <span className="text-center text-white-100 text-xs capitalize">
        {name} #{id}
      </span>
    </div>
  );
}
