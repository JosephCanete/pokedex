import React, { useEffect } from "react";
import loadingGif from "../assets/loading/loading.gif";
import Image from "next/image";

export type useLoadMoreProps = {
  initLoadMore: () => void;
};

export default function useLoadMore({ initLoadMore }: useLoadMoreProps) {
  useEffect(() => {
    function handleScroll() {
      // Check if the user has scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        initLoadMore();
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Image src={loadingGif} alt="Loading" />
    </div>
  );
}
