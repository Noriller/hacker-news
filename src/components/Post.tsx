import parse from "html-react-parser";
import { sanitize } from "isomorphic-dompurify";
import { usePost } from "../service/Post/usePost";
import { PostSkeleton } from "./PostSkeleton";

export function Post({ id }: { id: number }) {
  const { data, isLoading, isError, error } = usePost(id);

  if (isLoading) {
    return <PostSkeleton />;
  }

  if (isError) {
    // TODO: handle error
    return <div>{"oops " + JSON.stringify(error)}</div>;
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { title, text, url, by, time, type } = data;

  return (
    <div className="container w-[70%] rounded-lg bg-gradient-to-r from-[#8029d6] to-[#ff0080] p-2 text-white">
      <div className="bg-black p-4">
        <h2 className="mb-2 flex justify-between rounded-2xl border-2 border-white p-2 text-2xl">
          <a
            href={url}
            rel="noopener noreferrer"
            className="flex justify-between"
            tabIndex={1}
          >
            <span className="mr-2 text-xl" aria-label={type}>
              {type === "job" ? "💼" : "📰"}
            </span>
            <span>{sanitizeAndParseToReact(title)}</span>
          </a>
        </h2>
        <div className="flex flex-col gap-2 rounded-2xl border border-gray-300 p-2 text-2xl">
          <div className="flex justify-between">
            <div className="text-xl md:before:content-['Author:_']">{by}</div>
            <div className="text-xl md:before:content-['Date:_']">
              {new Date(time).toISOString().slice(0, 10)}
            </div>
          </div>
          <div className="text-xl [&:not(:hover,:focus)]:truncate" tabIndex={1}>
            {text}
          </div>
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
