import NProgress from 'nprogress';
import withApollo from 'next-with-apollo';
import { any } from 'prop-types';
import Router from 'next/router';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return pageProps;
};

MyApp.propTypes = {
  Component: any,
  pageProps: any,
  apollo: ApolloClient,
};

export default withData(MyApp);
