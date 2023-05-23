import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { Box } from '@mui/material';

import Header from '@/components/common/header';

import styles from './Page.module.scss';

const Page: FC<PropsWithChildren<object>> = ({ children }) => (
  <Box className={styles.wrapper}>
    <Header />
    <Box className={styles.content}>{children}</Box>
  </Box>
);

export default Page;
