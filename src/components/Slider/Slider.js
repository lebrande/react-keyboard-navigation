import React, { useState } from 'react';
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";

const Slider = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const [activeItem, setActiveItem] = useState(1);
  const getVisibleItems = () => {
    if (activeItem === 1) {
      return [1, 2, 3];
    }
    if (activeItem === 8) {
      return [6, 7, 8];
    }

    return items.filter((item) => item >= activeItem - 1 && item <= activeItem + 1);
  };

  useSpatialNavigation('#slider .column', [activeItem]);

  return (
    <div id="slider" className="columns">
      {getVisibleItems().map((item) => {
        return (
          <div key={item} className="column" onFocus={() => {
            setActiveItem(item);
          }}>
            <p className="notification is-primary">
              Item {item}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;