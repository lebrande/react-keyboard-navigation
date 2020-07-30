import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChannelVideo } from '../Channels/types';
import './Channel.css';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';
import Slider from '../Slider/Slider';
import { InputSliderItem } from '../Slider/types';
import ChannelSliderItem from '../ChannelSliderItem/ChannelSliderItem';

type Params = {
  channelId: string;
}

const Channel: FC = () => {
  const { channelId } = useParams<Params>();
  const [videos, setVideos] = useState<ChannelVideo[]>([]);

  useSpatialNavigation('#channel .Channel__item', [videos]);
  useEffect(() => {
    fetch(`/.netlify/functions/videos?channelId=${channelId}`)
      .then((response: Response) => response.json())
      .then((videos: ChannelVideo[]) => {
        setVideos(videos);
      });
  }, [channelId]);

  const items: InputSliderItem[] = videos.map(({
    imageUrl,
    id,
  }) => ({
    id,
    image: imageUrl,
    link: `/video/${id}`,
  }))

  return (
    <div id="channel" className="Channel">
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

export default Channel;