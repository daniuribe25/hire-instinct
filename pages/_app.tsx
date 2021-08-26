import '../styles/globals.css'
import Layout from '../components/Layout'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../styles/theme';
import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app'

const Instinct = ({ Component, pageProps }: AppProps) => {

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default Instinct;
