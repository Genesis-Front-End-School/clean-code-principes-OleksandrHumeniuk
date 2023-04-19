import type { FC } from 'react';
import React from 'react';
import { Box, CircularProgress } from '@mui/material';

import styles from './Loader.module.scss';

const Loader: FC = () => (
  <Box className={styles.wrapper}>
    <CircularProgress size={100} />
  </Box>
);

export default Loader;
