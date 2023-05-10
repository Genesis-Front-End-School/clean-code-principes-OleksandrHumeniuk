import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';

import VideoPlayer from './VideoPlayer';

describe('VideoPlayer', () => {
  const testTitle = 'test title';
  const testPoster = '/test-poster';
  const testSrc = '/test-src';

  it('should render video correctly', () => {
    render(<VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />);
    const video = document.querySelector('video');

    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', testSrc);
    expect(video).toHaveAttribute('title', testTitle);
    expect(video).toHaveAttribute('poster', testPoster);
  });

  it('should render image if src attribute is null', () => {
    render(
      <VideoPlayer src={null as any} title={testTitle} poster={testPoster} />,
    );
    const image = document.querySelector('img');

    expect(image).toHaveAttribute('src', testPoster);
  });

  it('should increase playback rate on h key press', () => {
    render(<VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />);
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video.playbackRate).toBe(1);

    fireEvent.keyUp(video, { key: 'j' });

    expect(video.playbackRate).toBe(1.2);
  });

  it('should decrease playback rate on h key press', () => {
    render(<VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />);
    const video = document.querySelector('video') as HTMLVideoElement;

    expect(video.playbackRate).toBe(1);

    fireEvent.keyUp(video, { key: 'h' });

    expect(video.playbackRate).toBe(0.8);
  });

  it('should not be higher than max playback rate (3)', () => {
    render(<VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />);
    const video = document.querySelector('video') as HTMLVideoElement;

    for (let i = 0; i < 10; i++) {
      fireEvent.keyUp(video, { key: 'j' });
    }

    expect(video.playbackRate).toBe(3);
  });

  it('should not be lower than min playback rate (0)', () => {
    render(<VideoPlayer src={testSrc} title={testTitle} poster={testPoster} />);
    const video = document.querySelector('video') as HTMLVideoElement;

    for (let i = 0; i < 10; i++) {
      fireEvent.keyUp(video, { key: 'h' });
    }

    expect(video.playbackRate).toBe(0);
  });
});
