import React, { FC, ReactNode } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';
import { filterVisibleItems } from './utils/filterVisibleItems';
import { setItemsVariant } from './utils/setItemsVariant';
import { sliderVariants } from './utils/sliderVariants';
import { InputSliderItem, SliderItem } from './types';
import { useHistory } from 'react-router-dom';
import './Slider.css';

type Props = {
  items: InputSliderItem[];
  renderItem: (item: {
    image: string;
    id: string;
  }) => ReactNode;
};

const Slider: FC<Props> = ({
  items,
  renderItem,
}) => {
  if (!items.length) {
    return (
      <p>No items</p>
    );
  }

  const history = useHistory();
  const inputItems: SliderItem[] = items.map((item) => ({
      ...item,
      variant: 'hidden',
  }));
  const [_items, setItems] = useState(setItemsVariant(inputItems, inputItems[0].id));
  const visibleItems = filterVisibleItems(_items);

  useSpatialNavigation('#slider .Slider__item', [_items]);

  return (
    <div id="slider" className="Slider">
      <AnimatePresence>
        {visibleItems.map(({ id, variant, image, link }) => {
          console.log({ id })
          return (
            <motion.div
              key={id}
              className="Slider__item"
              onFocus={() => {
                setItems(setItemsVariant(_items, id));
              }}
              onClick={() => {
                history.push(link);
              }}
              onKeyUp={({ key }) => {
                if (['Enter', ' '].includes(key)) {
                  history.push(link);
                }
              }}
              variants={sliderVariants}
              animate={variant}
              initial={variant === 'prev' ? 'initialPrev' : variant === 'next' ? 'initialNext' : 'initialActive'}
              exit={variant === 'prev' ? 'exitPrev' : 'exitNext'}
            >
              {renderItem({ image, id })}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
