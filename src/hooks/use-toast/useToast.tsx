import { useContext } from 'react';

import { ToastContext } from '@/hooks/use-toast/toast-context';

const useToast = () => {
  const { showToast } = useContext(ToastContext);

  return {
    error: (message: string) => showToast({ message, type: 'error' }),
    warning: (message: string) => showToast({ message, type: 'warning' }),
    success: (message: string) => showToast({ message, type: 'success' }),
    info: (message: string) => showToast({ message, type: 'info' }),
  };
};

export default useToast;
