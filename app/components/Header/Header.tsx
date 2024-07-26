import React from "react";
import FilterButton from "../Filter/Filter";

export default function Header() {
  // const [filter, setFilter] = React.useState<[]>();
  return (
    <div className="w-full mb-4">
      <div className="flex items-center gap-2 xl:ml-[100px] m-6">
        <FilterButton />
        {/* <div className="border border-white-100">Filter Items</div> */}
      </div>
    </div>
  );
}
