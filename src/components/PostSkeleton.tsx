export function PostSkeleton() {
  return (
    <div className="container w-[70%] animate-pulse rounded-lg bg-gradient-to-r from-[#8029d688] to-[#ff008088] p-1">
      <span className="sr-only">Loading...</span>
      <div className="bg-black p-2">
        <div className="mb-2 flex justify-between rounded-2xl p-2 align-middle text-2xl">
          <div className="m-2 h-3 w-48 rounded-full bg-gray-700" />
        </div>
        <div className="flex flex-col gap-2 rounded-2xl p-2 text-2xl">
          <div className="mb-2.5 h-2 rounded-full bg-gray-700" />
          <div className="mb-2.5 h-2 max-w-[320px] rounded-full bg-gray-700" />
          <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
