import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startClock } from "@/store/actions";
import Layout from "@/components/Layout";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next with redux.</h1>
        <div>
          <Link href="/posts/first-post">Check out the blog</Link>
        </div>
        <div>
          <Link href="/onboarding">Try our product</Link>
        </div>
      </main>
    </Layout>
  );
}
