import Head from "next/head";
import Link from "next/link";
import ShowReduxState from "@/components/ShowReduxState";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startClock } from "@/store/actions";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next with redux.</h1>
        <Link href="/posts/first-post">Check out the blog</Link>
        <ShowReduxState />
      </main>
    </>
  );
}
