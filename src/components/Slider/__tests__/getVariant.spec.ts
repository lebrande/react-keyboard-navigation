import { getVariant } from '../utils/getVariant';

describe('getVariant', () => {
  it('return active for (1,1)', () => {
    expect(getVariant(1, 1)).toBe('active');
  });
});
