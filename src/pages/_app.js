import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-responsive-modal/styles.css';

import { configureStore } from '@reduxjs/toolkit';
import Head from 'next/head';
import { Provider } from 'react-redux';

import playerReducer from '@/menu/players/auth/slice';
import Layout from '@/shared/layout/component';
import { getTitles } from '@/utils/functions';

export default function App({ Component, pageProps, router }) {
  const page = router.pathname;
  const { titleTab } = getTitles(page);
  return (
    <>
      <Head>
        <title>{titleTab}</title>
      </Head>
      <Provider store={store}>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

const store = configureStore({
  reducer: {
    player: playerReducer
  },
  preloadedState: {
    player: { data: null, isAuthenticated: false }
  }
});
