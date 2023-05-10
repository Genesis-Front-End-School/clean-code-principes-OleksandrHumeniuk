import { useEffect, useState } from 'react';

import AuthService from '@/services/auth';

const useLoadToken = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loadToken = async () => {
    await AuthService.loadToken();
    setIsLoading(false);
  };

  useEffect(() => {
    void loadToken();
  }, [loadToken]);

  return {
    isLoading,
  };
};

export default useLoadToken;
