import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";
import "./Slider.css";

import apple from '../../img/apple.jpg';
import blueberry from '../../img/blueberry.jpg';
import cherry from '../../img/cherry.jpg';
import grapefruit from '../../img/grapefruit.jpg';
import lime from '../../img/lime.jpg';
import orange from '../../img/orange.jpg';
import peach from '../../img/peach.jpg';
import pear from '../../img/pear.jpg';
import pineapple from '../../img/pineapple.jpg';
import strawberry from '../../img/strawberry.jpg';
import tomato from '../../img/tomato.jpg';

const images = [
  apple,
  blueberry,
  cherry,
  grapefruit,
  lime,
  orange,
  peach,
  pear,
  pineapple,
  strawberry,
  tomato,
];

const variants = {
  initialPrev: { left: '10%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  exitPrev: { left: '10%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  prev: { left: '30%', opacity: 1, scale: 0.8, x: '-50%', y: '-50%' },
  active: { left: '50%', opacity: 1, scale: 1, x: '-50%', y: '-50%' },
  next: { left: '70%', opacity: 1, scale: 0.8, x: '-50%', y: '-50%' },
  exitNext: { left: '90%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  initialNext: { left: '90%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
}

const getVariant = (itemOrder, activeItemOrder) => {
  if (itemOrder - activeItemOrder + 1 === 0) {
    return 'prev';
  }
  if (itemOrder - activeItemOrder === 0) {
    return 'active';
  }
  if (itemOrder - activeItemOrder - 1 === 0) {
    return 'next';
  }

  return 'hidden';
}

const setVisibleItems = (activeItemOrder) => {
  return images
    .map((image, index) => ({
      order: index + 1,
      image,
    }))
    .map((item) => ({
      ...item,
      variant: getVariant(item.order, activeItemOrder),
    }))
    .filter(
      ({ variant }) => variant !== 'hidden'
    );
};

const Slider = () => {
  const [items, setItems] = useState(setVisibleItems(1));

  useSpatialNavigation("#slider .Slider__item", [items]);

  return (
    <div id="slider" className="Slider">
      <AnimatePresence>
        {items.map(({ order, variant, image }) => {
          return (
            <motion.div
              key={order}
              className="Slider__item"
              onFocus={() => {
                setItems(setVisibleItems(order));
              }}
              variants={variants}
              animate={variant}
              initial={variant === 'prev' ? 'initialPrev' : 'initialNext'}
              exit={variant === 'prev' ? 'exitPrev' : 'exitNext'}
            >
              <p
                className={`notification is-primary Slider__content`}
                style={{
                  backgroundImage: `url('${image}')`
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
