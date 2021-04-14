import 'tailwindcss/tailwind.css';
import '../haticus/components/index/hero.css';

import Head from 'next/head';
import { settings } from '../haticus/settings';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {settings.title} - {settings.name}
        </title>
        <link rel='icon' type='image/png' href={settings.favicon} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
