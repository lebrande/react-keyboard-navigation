import { setItemsVariant } from '../setItemsVariant';
import { sliderItemsMock } from '../../__mocks__/sliderItemsMock';

const getItemsCopy = () => sliderItemsMock.map(a => ({...a}));

const setItemsVariantCases = [
  {
    input: {
      items: sliderItemsMock,
      activeItemId: '0',
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
      activeItemId: '3',
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
      activeItemId: `${sliderItemsMock.length - 1}`,
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
      activeItemId,
    },
    createExpected,
  }) => {
    it(`return active for activeItemId: ${activeItemId}`, () => {
      expect(setItemsVariant(items, activeItemId)).toStrictEqual(createExpected());
    });
  });
});
