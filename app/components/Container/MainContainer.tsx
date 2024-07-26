import React from "react";

export default function MainContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="xl:mx-4 w-full">{children}</div>;
}
