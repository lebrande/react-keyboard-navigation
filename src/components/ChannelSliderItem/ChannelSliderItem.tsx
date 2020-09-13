import React, { FC } from 'react';
import './ChannelSliderItem.css';

type Props = {
  image: string;
};

const ChannelSliderItem: FC<Props> = ({
  image,
}) => {
  return (
    <p
      className={`notification is-primary ChannelSliderItem`}
      style={{
        backgroundImage: `url('${image}')`
      }}
    />
  );
};

export default ChannelSliderItem;