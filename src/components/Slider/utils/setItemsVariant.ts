import { SliderItem } from '../types';
import { getVariant } from './getVariant';

export const setItemsVariant = (
  items: SliderItem[],
  activeItemId: string,
): SliderItem[] => {
  const activeItemIndex = items.findIndex(({ id }) => id === activeItemId);
  if (activeItemIndex === -1) {
    return items;
  }
  
  return items
    .map((item, index) => ({
      ...item,
      variant: getVariant(index, activeItemIndex),
    }));
};