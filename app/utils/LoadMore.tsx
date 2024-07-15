import { useState, useEffect, useCallback } from "react";
import throttle from "lodash/throttle";
import debounce from "lodash/debounce";
import Image from "next/image";
import LoadingGif from "../assets/loading/loading.gif";

export type useLoadMoreProps = {
  initLoadMore: () => Promise<void>;
};

export default function LoadMore({ initLoadMore }: useLoadMoreProps) {
  const [isLoadingPromise, setIsLoadingPromise] =
    useState<Promise<void> | null>(null);
  const [isScrollComplete, setIsScrollComplete] = useState(true);
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const DELAY = 250;
  const handleScroll = useCallback(() => {
    if (
      isScrollComplete &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      setIsScrollComplete(false);
      setIsLoadingVisible(true);
      setIsLoadingPromise(initLoadMore());
    }
  }, [isScrollComplete, initLoadMore]);

  const debouncedHandleScroll = debounce(handleScroll, DELAY);
  const throttledHandleScroll = throttle(debouncedHandleScroll, DELAY);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [throttledHandleScroll]);

  useEffect(() => {
    if (isLoadingPromise) {
      isLoadingPromise
        .then(() => {
          setIsLoadingPromise(null);
          setIsScrollComplete(true);
          setTimeout(() => {
            setIsLoadingVisible(false);
          }, DELAY);
        })
        .catch((error) => {
          console.error("Error during load:", error);
          setIsLoadingPromise(null);
          setIsScrollComplete(true);
          setTimeout(() => {
            setIsLoadingVisible(false);
          }, DELAY);
        });
    }
  }, [isLoadingPromise]);

  return isLoadingVisible ? (
    <Image className="" width={400} src={LoadingGif} alt="Loading" />
  ) : null;
}
