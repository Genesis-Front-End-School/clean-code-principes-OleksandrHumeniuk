import type { FC } from 'react';
import React from 'react';
import {
  AppBar,
  Box,
  FormControlLabel,
  Link,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';

import useTheme from '@/hooks/use-theme';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { checked, handleChange } = useTheme();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.content}>
          <Typography variant="h4">
            <Link underline="none" className={styles.logo} href="/">
              Learnify
            </Link>
          </Typography>
          <FormControlLabel
            className={styles.switch}
            control={
              <Switch
                checked={checked}
                color="default"
                onChange={handleChange}
                id="theme-switch"
              />
            }
            label="Dark theme"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
