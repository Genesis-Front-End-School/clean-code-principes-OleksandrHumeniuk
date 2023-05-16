import AuthAPI from '@/api/auth';
import { LOCAL_STORAGE_KEYS } from '@/types/common/local-storage';

class Auth {
  loadToken = async () => {
    const { token } = await AuthAPI.getToken();
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
  };
}

const AuthService = new Auth();
export default AuthService;
