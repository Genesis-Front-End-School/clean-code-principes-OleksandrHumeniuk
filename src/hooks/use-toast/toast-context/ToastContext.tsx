import type { FC, PropsWithChildren } from 'react';
import React, { useState } from 'react';

import type { ToastType } from '@/components/common/toast/Toast';
import Toast from '@/components/common/toast/Toast';

interface OptionsType {
  open: boolean;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (options: Omit<OptionsType, 'open'>) => void;
}

export const ToastContext = React.createContext<ToastContextType>({
  showToast: () => {},
});

const ToastContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [options, setOptions] = useState<OptionsType>({
    type: 'error',
    message: '',
    open: false,
  });

  const hideToast = () => setOptions({ ...options, open: false });

  const showToast = ({
    message,
    type = 'error',
  }: Omit<OptionsType, 'open'>) => {
    setOptions({
      open: true,
      type,
      message,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast onClose={hideToast} {...options} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
