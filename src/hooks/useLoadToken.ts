import { useEffect, useState } from 'react';

import AuthService from '@/services/auth.service';

const useLoadToken = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loadToken = async () => {
    await AuthService.getAndSaveToken();
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
