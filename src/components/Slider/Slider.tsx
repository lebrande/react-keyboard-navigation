import React, { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";
import { filterVisibleItems } from './utils/filterVisibleItems';
import { setItemsVariant  } from './utils/setItemsVariant';
import { sliderVariants } from './utils/sliderVariants';
import { sliderItemsMock } from './__mocks__/sliderItemsMock';
import "./Slider.css";

const Slider: FC = () => {
  const [items, setItems] = useState(setItemsVariant(sliderItemsMock, 1));

  useSpatialNavigation("#slider .Slider__item", [items]);

  return (
    <div id="slider" className="Slider">
      <AnimatePresence>
        {filterVisibleItems(items).map(({ order, variant, image }) => {
          return (
            <motion.div
              key={order}
              className="Slider__item"
              onFocus={() => {
                setItems(setItemsVariant(items, order));
              }}
              variants={sliderVariants}
              animate={variant}
              initial={variant === 'prev' ? 'initialPrev' : variant === 'next' ? 'initialNext' : 'initialActive'}
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
