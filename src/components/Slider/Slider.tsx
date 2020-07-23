import React, { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";
import { setVisibleItems, sliderVariants } from './utils';
import "./Slider.css";

const Slider: FC = () => {
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
              variants={sliderVariants}
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
