import { useEffect, useState } from "react";
import type { Post } from "../../../service/types";

export function useDecoration(data: Post | undefined, isLoading: boolean) {
  // to make it clear its a link, after loading the post
  // we show a little decoration that stays visible for a second
  const [initialDecoration, setInitialDecoration] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialDecoration(false);
    }, 1000);

    return () => {
      setInitialDecoration(true);
      clearTimeout(timeout);
    };
  }, [data, isLoading]);

  return initialDecoration;
}
