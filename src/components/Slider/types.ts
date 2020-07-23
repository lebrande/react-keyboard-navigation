import { sliderVariants } from './utils/sliderVariants';

export type SliderItemVariant = keyof typeof sliderVariants | 'hidden';
export type SliderItem = {
  order: number;
  image: string;
  variant: SliderItemVariant;
};