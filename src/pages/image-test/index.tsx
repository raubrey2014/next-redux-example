import Head from "next/head";
import Image from "next/image";

const Attribute = () => (
  <div>
    <span>
      Photo by{" "}
      <a href="https://unsplash.com/@kalenemsley?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Kalen Emsley
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/s/photos/mountain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        Unsplash
      </a>
    </span>
  </div>
);
export default function ImageTest() {
  return (
    <>
      <Head>
        <title>Image test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's compare next.js image optimization vs. none.</h1>
      <div style={{ display: "flex" }}>
        <div style={{ margin: 100 }}>
          <h3>Optimized</h3>
          <Image src="/mountain.jpg" width={3600} height={2400} />
          <Attribute />
        </div>
        <div style={{ margin: 100 }}>
          <h3>Not optimized</h3>
          <Image src="/mountain.jpg" width={3600} height={2400} unoptimized />
          <Attribute />
        </div>
      </div>
    </>
  );
}
