import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

type Params = {
  videoId: string;
}

const VideoPlayer: FC = () => {
  const { videoId } = useParams<Params>();

  return (
    <div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} />
    </div>
  );
};

export default VideoPlayer;