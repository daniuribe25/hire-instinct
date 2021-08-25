import '../styles/globals.css'
import Layout from '../components/Layout'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from '../styles/theme';
import React from 'react';

const Instinct = ({ Component, pageProps }) => {

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
