import { usePost } from "../../service/Post/usePost";
import { PostSkeleton } from "../PostSkeleton";
import { sanitizeAndParseToReact } from "./helpers/sanitizeAndParseToReact";
import { useDecoration } from "./hooks/useDecoration";
import { unixToYYYYMMDD } from "./helpers/unixToYYYYMMDD";
import { PostTitleLink } from "./PostTitleLink";

export function Post({ id }: { id: number }) {
  const { data, isLoading, isError, error } = usePost(id);
  const decoration = useDecoration(data, isLoading);

  if (isLoading) {
    return <PostSkeleton />;
  }

  if (isError) {
    // TODO: handle error
    return <div>{"oops " + JSON.stringify(error)}</div>;
  }

  const { title, text, url, by, time, type } = data;

  const YYYYMMDDFormatDate = unixToYYYYMMDD(time);

  return (
    <div className="container w-[70%] rounded-lg bg-gradient-to-r from-[#8029d6] to-[#ff0080] p-1 text-white">
      <div className="bg-[#000d] p-2">
        <PostTitleLink
          url={url}
          type={type}
          decoration={decoration}
          title={title}
        />
        <div className="flex flex-col gap-2 rounded-2xl p-2 text-2xl">
          <div className="flex justify-between">
            <div
              className="text-xl md:before:content-['Author:_']"
              aria-label={`Author: ${by}`}
            >
              {by}
            </div>
            <div
              className="text-xl md:before:content-['Date:_']"
              aria-label={`Date: ${YYYYMMDDFormatDate}`}
            >
              {YYYYMMDDFormatDate}
            </div>
          </div>
          {text && (
            <div
              className="max-h-[999rem] text-xl transition-[max-height] ease-out [&:not(:hover,:focus)]:max-h-8 [&:not(:hover,:focus)]:truncate"
              tabIndex={0}
            >
              {sanitizeAndParseToReact(text)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
