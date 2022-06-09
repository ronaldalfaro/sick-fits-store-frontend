import Page from '../components/Page';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
