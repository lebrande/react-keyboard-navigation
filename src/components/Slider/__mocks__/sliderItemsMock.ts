import { SliderItem } from '../types';

export const sliderItemsMock: SliderItem[] = Array(10)
  .fill('')
  .map((_, index) => ({
    id: `${index}`,
    image: '',
    variant: 'hidden',
    link: '',
  }));