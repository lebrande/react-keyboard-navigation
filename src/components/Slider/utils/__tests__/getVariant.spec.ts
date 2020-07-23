import { getVariant } from '../getVariant';

const getVariantCases = [
  {
    input: {
      itemOrder: 1,
      activeItemOrder: 1,
    },
    expected: 'active',
  },
  {
    input: {
      itemOrder: 5,
      activeItemOrder: 5,
    },
    expected: 'active',
  },
  {
    input: {
      itemOrder: 5,
      activeItemOrder: 10,
    },
    expected: 'hidden',
  },
  {
    input: {
      itemOrder: 7,
      activeItemOrder: 8,
    },
    expected: 'prev',
  },
  {
    input: {
      itemOrder: 9,
      activeItemOrder: 8,
    },
    expected: 'next',
  },
  {
    input: {
      itemOrder: 10,
      activeItemOrder: 8,
    },
    expected: 'hidden',
  },
];

describe('getVariant', () => {
  getVariantCases.forEach(({
    input: {
      itemOrder,
      activeItemOrder,
    },
    expected,
  }) => {
    it(`return active for (${itemOrder}, ${activeItemOrder})`, () => {
      expect(getVariant(itemOrder, activeItemOrder)).toBe(expected);
    });
  });
});
