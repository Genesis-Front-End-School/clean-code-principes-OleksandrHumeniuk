import type { FC } from 'react';
import { Alert, Snackbar } from '@mui/material';

import styles from './Toast.module.scss';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  open: boolean;
  onClose: () => void;
  message: string;
  type: ToastType;
}

const AUTO_HIDE_DURATION = 10000;

const Toast: FC<ToastProps> = ({ open, onClose, message, type }) => (
  <Snackbar
    key={message + type}
    open={open}
    ClickAwayListenerProps={{ onClickAway: () => null }}
    autoHideDuration={AUTO_HIDE_DURATION}
    onClose={onClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
  >
    <Alert
      severity={type}
      onClose={onClose}
      variant="filled"
      className={styles.toast}
    >
      {message}
    </Alert>
  </Snackbar>
);

export default Toast;
