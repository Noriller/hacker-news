import parse from "html-react-parser";
import { sanitize } from "isomorphic-dompurify";

/**
 * From the docs, some keys returned are HTML markup
 * because of that, we need to sanitize them
 * before rendering
 */
export function sanitizeAndParseToReact(html: string) {
  return parse(sanitize(html));
}
