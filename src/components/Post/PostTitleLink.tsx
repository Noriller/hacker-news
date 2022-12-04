import clsx from "clsx";
import { sanitizeAndParseToReact } from "./helpers/sanitizeAndParseToReact";
import { getTypeEmoji } from "./helpers/getTypeEmoji";

type PostTitleLinkProps = {
  decoration: boolean;
  title: string;
  type: string;
  url: string;
};
export function PostTitleLink({
  decoration,
  title,
  type,
  url,
}: PostTitleLinkProps) {
  const typeEmoji = getTypeEmoji(type);

  return (
    <h2 className="mb-2 flex justify-between rounded-2xl p-2 text-2xl">
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        className="group flex justify-between"
        tabIndex={0}
      >
        <span className="mr-2 text-xl" aria-label={type}>
          {typeEmoji}
        </span>
        <span
          className={clsx(
            "decoration-violet-300 group-hover:underline group-focus:underline",
            decoration && "underline decoration-amber-400 decoration-4"
          )}
        >
          {sanitizeAndParseToReact(title)}
        </span>
      </a>
    </h2>
  );
}
