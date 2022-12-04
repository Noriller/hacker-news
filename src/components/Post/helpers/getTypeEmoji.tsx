import type { PostType } from "../../../service/types";

export function getTypeEmoji(type: string) {
  // from the docs, the API should return only the types "job" or "story"
  // so we narrow it down and add an emoji
  // to err on the safe side, we also add a default emoji
  type BestHistoriesPossibleTypes = Extract<PostType, "job" | "story">;
  const typeEmoji =
    {
      job: "💼",
      story: "📰",
    }[type as BestHistoriesPossibleTypes] ?? "❔";
  return typeEmoji;
}
