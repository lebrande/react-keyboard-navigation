import { sliderVariants } from './utils';

export type SliderItemVariant = keyof typeof sliderVariants | 'hidden';
export type SliderItem = {
  order: number;
  image: string;
  variant: SliderItemVariant;
};