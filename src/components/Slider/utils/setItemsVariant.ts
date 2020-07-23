import { SliderItem } from '../types';
import { getVariant } from './getVariant';

export const setItemsVariant = (
  items: SliderItem[],
  activeItemOrder: number,
): SliderItem[] => {
  return items
    .map((item) => ({
      ...item,
      variant: getVariant(item.order, activeItemOrder),
    }));
};