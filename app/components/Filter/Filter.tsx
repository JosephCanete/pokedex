import neutralIcon from "../../assets/type/neutral.png";
import Image from "next/image";
import { useState } from "react";

export default function FilterButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOnClickFilter = () => {
    setIsDialogOpen(true);
  };

  const handleOnClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="text-white-100">
      <button
        className="flex items-center gap-2 border border-gray-200 rounded p-2"
        onClick={handleOnClickFilter}
      >
        <Image src={neutralIcon} alt="NeutralIcon" width={12} />
        <p className="text-white-100">Poke Type</p>
      </button>
    </div>
  );
}
