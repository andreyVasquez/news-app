import Head from "next/head";

export default function PageLayout({ children, title = "NewsApp" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Newsapp - the best app to read news"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>📰 NewsApp</header>
      <main>{children}</main>
      <style jsx>{`
        header {
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
