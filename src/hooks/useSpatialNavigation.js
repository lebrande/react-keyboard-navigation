import { useEffect } from 'react';
import SpatialNavigation from 'spatial-navigation-js';

export const useSpatialNavigation = (selector, deps = []) => {
  useEffect(() => {
    const id = SpatialNavigation.add({
      selector,
    });
    SpatialNavigation.makeFocusable();

    return () => {
      SpatialNavigation.remove(id);
    };
  }, deps);
}