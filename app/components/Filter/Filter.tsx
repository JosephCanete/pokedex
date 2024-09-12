import neutralIcon from "../../assets/type/neutral.png";
import Image from "next/image";
import { useState } from "react";
import FilterItem from "./FilterItem";

export default function FilterButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOnClickFilter = () => {
    setIsDialogOpen((value) => !value);
  };

  return (
    <div className="relative border border-white-100 text-white-100">
      <button
        className="flex items-center gap-2 border border-gray-200 rounded p-2"
        onClick={handleOnClickFilter}
      >
        <Image src={neutralIcon} alt="NeutralIcon" width={12} />
        <p className="text-white-100">Poke Type</p>
      </button>
      {isDialogOpen && (
        <div className="h-12 border border-white-100 absolute bottom-0 right-0">
          <FilterItem />
        </div>
      )}
    </div>
  );
}
