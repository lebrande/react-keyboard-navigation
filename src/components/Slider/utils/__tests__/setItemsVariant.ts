import { setItemsVariant } from '../setItemsVariant';
import { sliderItemsMock } from '../../__mocks__/sliderItemsMock';

const getItemsCopy = () => sliderItemsMock.map(a => ({...a}));

const setItemsVariantCases = [
  {
    input: {
      items: sliderItemsMock,
      activeItemOrder: 1,
    },
    createExpected: () => {
      const sliderItemsMockClone = getItemsCopy();
      sliderItemsMockClone[0].variant = 'active';
      sliderItemsMockClone[1].variant = 'next';
      return sliderItemsMockClone;
    },
  },
  {
    input: {
      items: sliderItemsMock,
      activeItemOrder: 4,
    },
    createExpected: () => {
      const sliderItemsMockClone = getItemsCopy();
      sliderItemsMockClone[2].variant = 'prev';
      sliderItemsMockClone[3].variant = 'active';
      sliderItemsMockClone[4].variant = 'next';
      return sliderItemsMockClone;
    },
  },
  {
    input: {
      items: sliderItemsMock,
      activeItemOrder: sliderItemsMock.length,
    },
    createExpected: () => {
      const sliderItemsMockClone = getItemsCopy();
      sliderItemsMockClone[sliderItemsMockClone.length - 2].variant = 'prev';
      sliderItemsMockClone[sliderItemsMockClone.length - 1].variant = 'active';
      return sliderItemsMockClone;
    },
  },
];

describe('setItemsVariant', () => {
  setItemsVariantCases.forEach(({
    input: {
      items,
      activeItemOrder,
    },
    createExpected,
  }) => {
    it(`return active for activeItemOrder: ${activeItemOrder}`, () => {
      expect(setItemsVariant(items, activeItemOrder)).toStrictEqual(createExpected());
    });
  });
});
