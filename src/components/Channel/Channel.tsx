import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChannelVideo } from '../Channels/types';
import './Channel.css';

type Params = {
  channelId: string;
}

const Channel: FC = () => {
  const { channelId } = useParams<Params>();
  const [videos, setVideos] = useState<ChannelVideo[]>([]);

  useEffect(() => {
    fetch(`/.netlify/functions/videos?channelId=${channelId}`)
      .then((response: Response) => response.json())
      .then((videos: ChannelVideo[]) => {
        console.log({
          videos,
        })
        setVideos(videos);
      });
  }, [channelId]);

  return (
    <div className="Channel">
      {videos.map(({
        imageUrl,
        title,
      }) => {
        return (
          <div
            key={title}
            className="Channel__item"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <h3>{title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Channel;