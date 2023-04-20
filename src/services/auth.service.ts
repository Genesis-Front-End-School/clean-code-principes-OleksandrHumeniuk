import axiosInstance from '@/services/instance';
import { LOCAL_STORAGE_KEYS } from '@/types/common/local-storage';

class Auth {
  getAndSaveToken = async () => {
    const res = await axiosInstance.get(
      `/auth/anonymous?platform=subscriptions`,
    );
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, res.data.token);
  };
}

const AuthService = new Auth();
export default AuthService;
