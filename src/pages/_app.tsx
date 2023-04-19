import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Toast from '@/components/common/toast';
import { wrapper } from '@/redux';
import AuthService from '@/services/auth.service';
import theme from '@/styles/theme';

import '@/styles/globals.scss';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadToken = async () => {
    await AuthService.getAndSaveToken();
    setIsLoaded(true);
  };

  useEffect(() => {
    void loadToken();
  }, [loadToken]);

  return (
    isLoaded && (
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Learnify</title>
        </Head>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Toast />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    )
  );
};

export default wrapper.withRedux(App);
