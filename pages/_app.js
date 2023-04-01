// global component

import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps);
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
