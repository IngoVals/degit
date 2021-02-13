import styles from '@assets/styles.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="stylesheet" href={styles} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
