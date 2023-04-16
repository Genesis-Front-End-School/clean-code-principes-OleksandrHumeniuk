import React, { FC, useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { useDispatch } from 'react-redux';
interface VideoPlayerProps {
  src: string;
  title: string;
  poster: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ src, poster, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dispatch = useDispatch();
  const hls = new Hls();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    hls.loadSource(src);
    hls.attachMedia(video);
  }, [dispatch, hls, src, videoRef]);

  return <video src={src} poster={poster} title={title} ref={videoRef} />;
};

export default VideoPlayer;
