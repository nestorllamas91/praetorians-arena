import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-responsive-modal/styles.css';

import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';

import Layout from '@/components/layout/component';
import store from '@/slices/store';
import { loadUser } from '@/slices/users';
import { getTitles } from '@/utils/functions';

export default function App({ Component, pageProps, router }) {
  const page = router.pathname;
  const { titleTab } = getTitles(page);
  axios.defaults.baseURL = '/api';
  return (
    <>
      <Head>
        <title>{titleTab}</title>
      </Head>
      <Provider store={store}>
        <AppChild Component={Component} pageProps={pageProps} router={router} />
      </Provider>
    </>
  );
}

function AppChild({ Component, pageProps, router }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = new Cookies().get('user_session');
    if (token) {
      const user = jwtDecode(token);
      dispatch(loadUser(user));
    }
  });
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  );
}
