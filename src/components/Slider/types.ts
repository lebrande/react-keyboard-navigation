import { sliderVariants } from './utils/sliderVariants';

export type SliderItemVariant = keyof typeof sliderVariants | 'hidden';
export type InputSliderItem = {
  id: string;
  image: string;
  link: string;
};
export type SliderItem = InputSliderItem & {
  variant: SliderItemVariant;
};