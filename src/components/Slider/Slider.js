import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";
import "./Slider.css";

const variants = {
  initialPrev: { left: '10%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  exitPrev: { left: '10%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  prev: { left: '30%', opacity: 1, scale: 0.8, x: '-50%', y: '-50%' },
  active: { left: '50%', opacity: 1, scale: 1, x: '-50%', y: '-50%' },
  next: { left: '70%', opacity: 1, scale: 0.8, x: '-50%', y: '-50%' },
  exitNext: { left: '90%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  initialNext: { left: '90%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
}

const setVisibleItems = (activeItemValue) => {
  if (activeItemValue === 1) {
    return [
      { value: 1, variant: 'active' }, 
      { value: 2, variant: 'next' },
    ];
  }
  if (activeItemValue === 8) {
    return [
      { value: 7, variant: 'prev' }, 
      { value: 8, variant: 'active' },
    ];
  }

  return [1, 2, 3, 4, 5, 6, 7, 8]
    .filter(
      (item) => item >= activeItemValue - 1 && item <= activeItemValue + 1
    )
    .map((item, index) => ({
      value: item,
      variant: index === 0 ? 'prev' : index === 1 ? 'active' : 'next'
    }));
};

const Slider = () => {
  const [items, setItems] = useState(setVisibleItems(1));

  useSpatialNavigation("#slider .Slider__item", [items]);

  return (
    <div id="slider" className="Slider">
      <AnimatePresence>
        {items.map(({ value, variant }) => {
          return (
            <motion.div
              key={value}
              className="Slider__item"
              onFocus={() => {
                console.log('onFocus', value)
                setItems(setVisibleItems(value));
              }}
              variants={variants}
              animate={variant}
              initial={variant === 'prev' ? 'initialPrev' : 'initialNext'}
              exit={variant === 'prev' ? 'exitPrev' : 'exitNext'}
            >
              <p className={`notification is-primary Slider__content Slider__content--${value}`}>Item {value}</p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
