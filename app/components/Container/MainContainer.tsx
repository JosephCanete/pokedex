import React from "react";

export default function MainContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="my-4 mx-auto w-full">{children}</div>;
}
