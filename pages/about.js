import Head from "next/head";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <PageLayout title="NewsApp - About">
      <div className={styles.container}>
        <Head>
          <title>NewsApp - About</title>
        </Head>

        <h1>About</h1>
        <Link href="/">Ir a home</Link>
      </div>
    </PageLayout>
  );
}
