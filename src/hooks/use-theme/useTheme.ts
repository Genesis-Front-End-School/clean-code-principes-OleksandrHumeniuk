import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { LOCAL_STORAGE_KEYS } from '@/types/common/local-storage';

const useTheme = () => {
  const [checked, setChecked] = useState(
    JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) ?? JSON.stringify(false),
    ) === true,
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.THEME,
      JSON.stringify(event.target.checked),
    );
    setChecked(event.target.checked);
  };

  return { checked, handleChange };
};

export default useTheme;
