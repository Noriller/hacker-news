import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import React from "react";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const { dehydratedState } = pageProps as { dehydratedState: unknown };

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Head>
          <title>Hacker News</title>
          <meta name="description" content="Top stories from Hacker News" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-[#27026d] to-[#15172c]">
          <Component {...pageProps} />
        </main>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
