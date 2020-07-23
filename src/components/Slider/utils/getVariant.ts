import { SliderItemVariant } from '../types';

export const getVariant = (itemOrder: number, activeItemOrder: number): SliderItemVariant => {
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