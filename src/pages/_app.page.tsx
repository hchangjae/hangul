import Registry from '@/components/registry';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '@/assets/css/reset.css';
import '@/assets/css/global.css';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
      </Head>
      <Registry session={pageProps.session}>
        <Component {...pageProps} />
      </Registry>
    </>
  );
};

export default App;
