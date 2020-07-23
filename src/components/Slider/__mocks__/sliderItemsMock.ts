import apple from '../../../img/apple.jpg';
import blueberry from '../../../img/blueberry.jpg';
import cherry from '../../../img/cherry.jpg';
import grapefruit from '../../../img/grapefruit.jpg';
import lime from '../../../img/lime.jpg';
import orange from '../../../img/orange.jpg';
import peach from '../../../img/peach.jpg';
import pear from '../../../img/pear.jpg';
import pineapple from '../../../img/pineapple.jpg';
import strawberry from '../../../img/strawberry.jpg';
import tomato from '../../../img/tomato.jpg';
import { SliderItem } from '../types';

const images: string[] = [
  apple,
  blueberry,
  cherry,
  grapefruit,
  lime,
  orange,
  peach,
  pear,
  pineapple,
  strawberry,
  tomato,
];

export const sliderItemsMock: SliderItem[] = images
  .map((image, index) => ({
    order: index + 1,
    image,
    variant: 'hidden',
  }));