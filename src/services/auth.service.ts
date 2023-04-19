import instance from '@/services/instance';
import { LOCAL_STORAGE_KEYS } from '@/types/common/local-storage';
import type { GetTokenResponse } from '@/types/services/auth';

class Auth {
  getToken = async (): Promise<GetTokenResponse> => {
    const res = await instance.get(`/auth/anonymous?platform=subscriptions`);
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, res.data.token);
    return res.data;
  };
}

const AuthService = new Auth();
export default AuthService;
