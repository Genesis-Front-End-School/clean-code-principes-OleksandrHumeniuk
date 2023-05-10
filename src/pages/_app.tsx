import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import Toast from '@/components/common/toast';
import useLoadToken from '@/hooks/useLoadToken';
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
          <Toast />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(App);
