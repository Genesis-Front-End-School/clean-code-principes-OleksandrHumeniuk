import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

import type { AppState } from '@/redux';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useAppSelector;
