import { Dispatch, SetStateAction } from "react";

type MorePostsButtonProps = {
  maxPosts: number;
  data: number[];
  setMaxPosts: Dispatch<SetStateAction<number>>;
};
export function MorePostsButton({
  setMaxPosts,
  maxPosts,
  data,
}: MorePostsButtonProps) {
  return (
    <button
      onClick={() => setMaxPosts((n) => n + 10)}
      className="container w-[70%] rounded-lg bg-gradient-to-r from-[#8029d6] to-[#ff0080] p-2 text-white"
    >
      <span className="block rounded-lg bg-[#ffffff88] p-3 text-2xl font-bold text-black">
        Show more Posts ({maxPosts}/{data.length})
      </span>
    </button>
  );
}
