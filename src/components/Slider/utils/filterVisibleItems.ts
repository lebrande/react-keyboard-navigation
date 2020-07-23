import { SliderItem } from '../types';

export const filterVisibleItems = (
  items: SliderItem[],
): SliderItem[] => {
  return items.filter(
    ({ variant }) => variant !== 'hidden'
  );
}