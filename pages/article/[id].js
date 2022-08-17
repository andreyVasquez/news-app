import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Article() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NewsApp - Article</title>
      </Head>

      <h1>Esto es un articulo</h1>
    </div>
  )
}
