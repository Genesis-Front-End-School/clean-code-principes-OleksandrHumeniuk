import { useEffect, useState } from 'react';

import AuthAPI from '@/api/auth';

const useLoadToken = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loadToken = async () => {
    await AuthAPI.getToken();
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
