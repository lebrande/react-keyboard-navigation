import { SliderItemVariant, SliderItem } from './types';

export const sliderVariants = {
  initialPrev: { left: '10%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  exitPrev: { left: '10%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  prev: { left: '30%', opacity: 1, scale: 0.8, x: '-50%', y: '-50%' },
  active: { left: '50%', opacity: 1, scale: 1, x: '-50%', y: '-50%' },
  next: { left: '70%', opacity: 1, scale: 0.8, x: '-50%', y: '-50%' },
  exitNext: { left: '90%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
  initialNext: { left: '90%', opacity: 0, scale: 0.5, x: '-50%', y: '-50%' },
}

const getVariant = (itemOrder: number, activeItemOrder: number): SliderItemVariant => {
  if (itemOrder - activeItemOrder + 1 === 0) {
    return 'prev';
  }
  if (itemOrder - activeItemOrder === 0) {
    return 'active';
  }
  if (itemOrder - activeItemOrder - 1 === 0) {
    return 'next';
  }

  return 'hidden';
}

export const setItemsVariant = (
  items: SliderItem[],
  activeItemOrder: number,
): SliderItem[] => {
  return items
    .map((item) => ({
      ...item,
      variant: getVariant(item.order, activeItemOrder),
    }))
    
};

export const filterVisibleItems = (
  items: SliderItem[],
): SliderItem[] => {
  return items.filter(
    ({ variant }) => variant !== 'hidden'
  );
}