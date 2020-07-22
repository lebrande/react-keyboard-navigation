import { useEffect, useState } from 'react';
import SpatialNavigation from 'spatial-navigation-js';

export const useSpatialNavigation = (selector, deps = []) => {
  const [prevId, setPrevId] = useState(null);
  useEffect(() => {
    if (!!prevId) {
      SpatialNavigation.remove(prevId);
    }
    const id = SpatialNavigation.add({
      selector,
    });
    setPrevId(prevId);
    SpatialNavigation.makeFocusable();

    return () => {
      SpatialNavigation.remove(id);
    };
  }, deps);
}