import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render } from '@testing-library/react';

import toastReducer from '@/redux/reducers/toast.reducer';

import '@testing-library/jest-dom';

import VideoPlayer from './VideoPlayer';

export const mockedStore = configureStore({
  reducer: {
    toast: toastReducer,
  },
});

describe('VideoPlayer', () => {
  const testTitle = 'test title';
  const testPoster = '/test-poster';
  const testSrc = '/test-src';

  it('should render video correctly', () => {
    render(
      <Provider store={mockedStore}>
        <VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />
      </Provider>,
    );
    const video = document.querySelector('video');

    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', testSrc);
    expect(video).toHaveAttribute('title', testTitle);
    expect(video).toHaveAttribute('poster', testPoster);
  });

  it('should render default poster if poster attribute is null', () => {
    render(
      <Provider store={mockedStore}>
        <VideoPlayer src={testSrc} title={testTitle} poster={null as any} />
      </Provider>,
    );
    const video = document.querySelector('video');

    expect(video).toHaveAttribute('poster', '/default.jpg');
  });

  it('should render image if src attribute is null', () => {
    render(
      <Provider store={mockedStore}>
        <VideoPlayer src={null as any} title={testTitle} poster={testPoster} />
      </Provider>,
    );
    const image = document.querySelector('img');

    expect(image).toHaveAttribute('src', '/default.jpg');
  });

  it('should increase playback rate on h key press', () => {
    render(
      <Provider store={mockedStore}>
        <VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />
      </Provider>,
    );
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video.playbackRate).toBe(1);

    fireEvent.keyUp(video, { key: 'j' });

    expect(video.playbackRate).toBe(1.2);
  });

  it('should decrease playback rate on h key press', () => {
    render(
      <Provider store={mockedStore}>
        <VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />
      </Provider>,
    );
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video.playbackRate).toBe(1);

    fireEvent.keyUp(video, { key: 'h' });

    expect(video.playbackRate).toBe(0.8);
  });

  it('should not be higher than max playback rate (3)', () => {
    render(
      <Provider store={mockedStore}>
        <VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />
      </Provider>,
    );
    const video = document.querySelector('video') as HTMLVideoElement;

    for (let i = 0; i < 10; i++) {
      fireEvent.keyUp(video, { key: 'j' });
    }

    expect(video.playbackRate).toBe(3);
  });

  it('should not be lower than min playback rate (0)', () => {
    render(
      <Provider store={mockedStore}>
        <VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />
      </Provider>,
    );
    const video = document.querySelector('video') as HTMLVideoElement;

    for (let i = 0; i < 10; i++) {
      fireEvent.keyUp(video, { key: 'h' });
    }

    expect(video.playbackRate).toBe(0);
  });
});
