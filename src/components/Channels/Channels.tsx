import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';
import './Channels.css';
import { Channel } from './types';

const Channels: FC = () => {
  const [channelsList, setChannelsList] = useState<Channel[]>([]);

  useSpatialNavigation('#channels .Channels__link', [channelsList]);
  useEffect(() => {
    fetch('/.netlify/functions/channels')
      .then((response: Response) => response.json())
      .then((videos: Channel[]) => {
        setChannelsList(videos);
      });
  }, []);

  return (
    <div id="channels" className="Channels">
      {channelsList.map(({
        channelId,
        name,
        image,
      }) => {
        return (
          <Link
            className="Channels__link"
            key={channelId}
            to={`/channels/${channelId}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Channels;
