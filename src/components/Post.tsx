import clsx from "clsx";
import parse from "html-react-parser";
import { sanitize } from "isomorphic-dompurify";
import { useEffect, useState } from "react";
import { usePost } from "../service/Post/usePost";
import { PostSkeleton } from "./PostSkeleton";

export function Post({ id }: { id: number }) {
  const { data, isLoading, isError, error } = usePost(id);
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

  if (isLoading) {
    return <PostSkeleton />;
  }

  if (isError) {
    // TODO: handle error
    return <div>{"oops " + JSON.stringify(error)}</div>;
  }

  const { title, text, url, by, time, type } = data;

  return (
    <div className="container w-[70%] rounded-lg bg-gradient-to-r from-[#8029d6] to-[#ff0080] p-1 text-white">
      <div className="bg-black p-2">
        <h2 className="mb-2 flex justify-between rounded-2xl p-2 text-2xl">
          <a
            href={url}
            rel="noopener noreferrer"
            className="group flex justify-between"
            tabIndex={1}
          >
            <span className="mr-2 text-xl" aria-label={type}>
              {type === "job" ? "💼" : "📰"}
            </span>
            <span
              className={clsx(
                "decoration-violet-300 group-hover:underline group-focus:underline",
                initialDecoration &&
                  "underline decoration-amber-400 decoration-4"
              )}
            >
              {sanitizeAndParseToReact(title)}
            </span>
          </a>
        </h2>
        <div className="flex flex-col gap-2 rounded-2xl p-2 text-2xl">
          <div className="flex justify-between">
            <div className="text-xl md:before:content-['Author:_']">{by}</div>
            <div className="text-xl md:before:content-['Date:_']">
              {new Date(time * 1000).toISOString().slice(0, 10)}
            </div>
          </div>
          {text && (
            <div
              className="coxinha max-h-[999rem] text-xl transition-[max-height] ease-out [&:not(:hover,:focus)]:max-h-8 [&:not(:hover,:focus)]:truncate"
              tabIndex={1}
            >
              {sanitizeAndParseToReact(text)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * From the docs, some keys returned are HTML markup
 * because of that, we need to sanitize them
 * before rendering
 */
function sanitizeAndParseToReact(html: string) {
  return parse(sanitize(html));
}
