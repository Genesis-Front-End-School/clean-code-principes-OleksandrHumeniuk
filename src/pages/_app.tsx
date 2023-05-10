import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import useLoadToken from '@/hooks/use-load-token/useLoadToken';
import ToastContextProvider from '@/hooks/use-toast/toast-context';
import { wrapper } from '@/redux';
import theme from '@/styles/theme';

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
            <Component {...pageProps} />
          </ToastContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(App);
