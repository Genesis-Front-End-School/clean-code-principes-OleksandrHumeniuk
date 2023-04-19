import type { FC, ReactNode } from 'react';
import React from 'react';
import { Box } from '@mui/material';

import Header from '@/components/common/header';

import styles from './Page.module.scss';

interface PageProps {
  children?: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => (
  <Box className={styles.wrapper}>
    <Header />
    <Box className={styles.content}>{children}</Box>
  </Box>
);

export default Page;
