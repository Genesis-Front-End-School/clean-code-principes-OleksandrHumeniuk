import type { FC, SyntheticEvent } from 'react';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import Hls from 'hls.js';

import { showToast } from '@/redux/reducers/toast.reducer';
import { TOAST_STATUS } from '@/types/redux/toast';

interface VideoPlayerProps {
  src: string;
  className: string;
  title: string;
  poster: string;
  isAutoPlay?: boolean;
}

const VideoPlayer: FC<VideoPlayerProps> = ({
  src,
  poster,
  isAutoPlay = false,
  ...rest
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);

    if (!isAutoPlay) {
      dispatch(
        showToast({
          status: TOAST_STATUS.INFO,
          message: `Use 'h' to slow video and 'j' to speed it up! Right click to open picture-in-picture mode`,
        }),
      );
      video.currentTime = Number(localStorage.getItem(src));
    }
  }, [isAutoPlay, src]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    localStorage.setItem(src, JSON.stringify(videoRef.current.currentTime));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLVideoElement>) => {
    if (!videoRef.current) return;

    const rate = Number(videoRef.current.playbackRate.toFixed(1));
    if (e.key === 'h') {
      videoRef.current.playbackRate = Math.max(rate - 0.2, 0);
    } else if (e.key === 'j') {
      videoRef.current.playbackRate = Math.min(rate + 0.2, 3);
    }
  };

  const handleContextMenu = (e: SyntheticEvent) => {
    if (!videoRef.current) return;
    e.preventDefault();
    void videoRef.current.requestPictureInPicture();
  };

  if (!src) {
    return (
      <Box
        className={rest.className}
        component="img"
        alt="course preview"
        src="/default.jpg"
      />
    );
  }

  return isAutoPlay ? (
    <video
      preload="auto"
      autoPlay={true}
      muted={true}
      src={src}
      poster={poster ? poster : '/default.jpg'}
      {...rest}
      ref={videoRef}
    />
  ) : (
    <video
      preload="auto"
      autoPlay={isAutoPlay}
      muted={isAutoPlay}
      controls={!isAutoPlay}
      src={src}
      {...rest}
      poster={poster ? poster : '/default.jpg'}
      ref={videoRef}
      onKeyPress={handleKeyPress}
      onContextMenu={handleContextMenu}
      onTimeUpdate={handleTimeUpdate}
    />
  );
};

export default VideoPlayer;
