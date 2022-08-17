import Image from "next/image";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <h1>No tenemos articulos</h1>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <article key={index}>
              <Image
                alt={`Image for the article ${article.title}`}
                src={article.urlToImage}
                width={450}
                height={300}
                quality={50}
                layout="responsive"
                priority={index < 2}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </article>
          ))}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b5dbd67693af4df080df4680eb8b164b");
  const { articles } = await res.json();
  return {
    props: {
      articles
    }
  };
}