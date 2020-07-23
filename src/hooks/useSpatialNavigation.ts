import { useEffect, useState, DependencyList } from 'react';
import SpatialNavigation from 'spatial-navigation-js';

export const useSpatialNavigation = (
  selector: string,
  deps?: DependencyList,
): void => {
  const [prevId, setPrevId] = useState<string | null>(null);
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
  }, deps || []);
}