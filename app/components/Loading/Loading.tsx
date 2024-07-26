import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#ffffff",
};

type LoadingProps = {
  loading: boolean;
};

export default function Loading({ loading }: LoadingProps) {
  return (
    <div className="flex h-screen items-center">
      <ClipLoader
        color="#ffffff"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
