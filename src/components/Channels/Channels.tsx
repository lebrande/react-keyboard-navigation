import React, { FC, useState, useEffect } from 'react';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';
import { Channel } from './types';
import Slider from '../Slider/Slider';
import ChannelSliderItem from '../ChannelSliderItem/ChannelSliderItem';
import './Channels.css';

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

  const items = channelsList.map((item) => ({
    ...item,
    link: `/channels/${item.id}`,
  }));

  return (
    <div id="channels" className="Channels">
      <Slider
        items={items}
        renderItem={({ image }) => {
          return (
            <ChannelSliderItem image={image} />
          );
        }}
      />
    </div>
  );
};

export default Channels;
