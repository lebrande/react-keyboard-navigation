import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

type Params = {
  videoId: string;
}

const VideoPlayer: FC = () => {
  const { videoId } = useParams<Params>();

  console.log({ 
    videoId,
  })

  return (
    <div>{videoId}</div>
  );
};

export default VideoPlayer;