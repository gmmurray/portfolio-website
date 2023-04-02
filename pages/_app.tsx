import '../styles/globals.scss';

import { CssBaseline, ThemeProvider } from '@mui/material';

import type { AppProps } from 'next/app';
import { ContactProvider } from '../components/ContactProvider';
import Head from 'next/head';
import { getTheme } from '../config/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Greg Murray - Software Engineer</title>
      </Head>
      <ContactProvider>
        <Component {...pageProps} />
      </ContactProvider>
    </ThemeProvider>
  );
}
