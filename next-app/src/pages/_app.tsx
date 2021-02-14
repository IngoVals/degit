import '@assets/styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
