import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@OleksandrHumeniuk/genesis-ui-library';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import useLoadToken from '@/hooks/use-load-token/useLoadToken';
import ToastContextProvider from '@/hooks/use-toast/toast-context';
import theme from '@/styles/theme';

import '@/styles/theme.scss';
import '@/styles/globals.scss';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  const { isLoading } = useLoadToken();

  if (isLoading) return;

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContextProvider>
            <Head>
              <title>Learnify</title>
            </Head>
            <Component {...pageProps} />
          </ToastContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default App;
