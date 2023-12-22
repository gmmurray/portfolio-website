import '../styles/globals.scss';

import { CssBaseline, ThemeProvider } from '@mui/material';

import type { AppProps } from 'next/app';
import { ContactProvider } from '../components/ContactProvider';
import { DefaultSeo } from 'next-seo';
import { Fragment } from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { getTheme } from '../config/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      {process.env.NODE_ENV !== 'development' && (
        <GoogleAnalytics trackPageViews />
      )}
      <DefaultSeo
        title="Greg Murray - Software Engineer"
        description="Jacksonville, FL based Full-stack Software Engineer with experience in React/NextJS, C#/.NET, MongoDB, and SQL"
        openGraph={{
          type: 'website',
          url: 'https://gregmurray.org',
          images: [
            {
              url: 'https://gregmurray.org/favicon.ico',
              width: 500,
              height: 500,
              alt: 'Greg Murray icon',
            },
          ],
        }}
      />
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <ContactProvider>
          <Component {...pageProps} />
        </ContactProvider>
      </ThemeProvider>
    </Fragment>
  );
}
