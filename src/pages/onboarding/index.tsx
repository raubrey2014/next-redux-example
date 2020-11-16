import Head from "next/head";
import Link from "next/link";
import Flow from "@/components/Flow";
import Layout from "@/components/Layout";

export default function Onboarding() {
  return (
    <Layout>
      <Head>
        <title>Welcome!</title>
      </Head>

      <Link href="/">Go back home</Link>
      <Flow />
    </Layout>
  );
}
