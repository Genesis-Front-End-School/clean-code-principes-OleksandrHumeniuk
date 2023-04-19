import { LOCAL_STORAGE_KEYS } from '@/types/common/local-storage';

const getAuthorizationHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN)}`,
  },
});

export default getAuthorizationHeader;
