import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MainHeader } from "../components/MainHeader";
import { Post } from "../components/Post";
import { getPost } from "../service/Post/getPost";
import { getPosts } from "../service/Posts/getPosts";
import { usePosts } from "../service/Posts/usePosts";

export default function Home() {
  const { data, isError, isLoading, error } = usePosts();
  const [maxPosts, setMaxPosts] = useState(10);

  if (isLoading) {
    return (
      <div className="m-auto flex animate-pulse flex-col items-center sm:scale-75 md:scale-100 lg:scale-150 xl:scale-[2]">
        <MainHeader />
        <span className="text-lg text-white">Loading your news...</span>
      </div>
    );
  }

  if (isError) {
    // TODO: handle error
    return <div>{"oops " + JSON.stringify(error)}</div>;
  }

  const morePosts = data.length >= maxPosts;

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <MainHeader />
      <div className="flex w-full flex-col items-center gap-6">
        {data?.slice(0, maxPosts).map((i) => (
          <Post id={i} key={i} />
        ))}
        {morePosts && (
          <button
            onClick={() => setMaxPosts((n) => n + 10)}
            className="container w-[70%] rounded-lg bg-gradient-to-r from-[#8029d6] to-[#ff0080] p-2 text-white"
          >
            <span className="block rounded-lg bg-[#ffffff88] p-3 text-2xl font-bold text-black">
              Show more Posts ({maxPosts}/{data.length})
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  // prefetch list
  const postsList = await getPosts();
  queryClient.setQueryData(["posts"], () => postsList);

  // prefetch first posts of the list
  await Promise.allSettled(
    postsList.slice(0, 5).map((postId) =>
      getPost(postId).then((post) => {
        queryClient.setQueryData(["getPost", postId], () => post);
      })
    )
  );

  const fiveMinutes = 60 * 5;

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: fiveMinutes,
  };
}
