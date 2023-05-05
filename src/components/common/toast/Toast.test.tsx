import type { FC } from 'react';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';

import Toast from '@/components/common/toast/Toast';
import toastReducer, { showToast } from '@/redux/reducers/toast.reducer';
import { TOAST_STATUS } from '@/types/redux/toast';

import '@testing-library/jest-dom';

export const mockedStore = configureStore({
  reducer: {
    toast: toastReducer,
  },
});

const TestComponent: FC<{ message: string }> = ({ message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      showToast({
        status: TOAST_STATUS.ERROR,
        message: message,
      }),
    );
  }, []);

  return <></>;
};

describe('Toast', () => {
  jest.setTimeout(15000);
  const testMessage = 'Testing message';

  render(
    <Provider store={mockedStore}>
      <Toast />
      <TestComponent message={testMessage} />
    </Provider>,
  );

  it('should render toast correctly', () => {
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it('should disappear after 10 seconds', async () => {
    await new Promise(resolve => setTimeout(resolve, 10000));
    expect(screen.queryByText(testMessage)).not.toBeInTheDocument();
  });
});
