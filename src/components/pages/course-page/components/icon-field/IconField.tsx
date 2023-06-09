import type { FC, ReactNode } from 'react';
import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

import styles from './IconField.module.scss';

interface IconFieldProps {
  label: string;
  icon: ReactNode;
}

const IconField: FC<IconFieldProps> = ({ label, icon }) => (
  <Box className={styles.wrapper}>
    <Avatar className={styles.avatar}>{icon}</Avatar>
    <Typography className={styles.label}>{label}</Typography>
  </Box>
);

export default IconField;
