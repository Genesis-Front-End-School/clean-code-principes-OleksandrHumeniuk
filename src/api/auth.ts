import axiosInstance from '@/api/instance';
import type { GetTokenResponse } from '@/types/services/auth';

class Auth {
  getToken = async (): Promise<GetTokenResponse> => {
    const res = await axiosInstance.get(
      `/auth/anonymous?platform=subscriptions`,
    );
    return res.data;
  };
}

const AuthAPI = new Auth();
export default AuthAPI;
