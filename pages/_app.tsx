import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import { settings } from '../haticus/settings';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {settings.title} - {settings.name}
        </title>
        <link rel='icon' type='image/png' href='/logo.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
