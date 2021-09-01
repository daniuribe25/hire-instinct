import '../styles/globals.css'
import Layout from '../components/Layout'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../styles/theme';
import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app'
import apolloClient from '../api/gql/apollo-client';
import { ApolloProvider } from '@apollo/client';

const Instinct = ({ Component, pageProps }: AppProps) => {

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (

    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default Instinct;
