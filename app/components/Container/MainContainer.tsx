import React from "react";

export default function MainContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="max-w-screen-2xl mx-auto my-4">{children}</div>;
}
