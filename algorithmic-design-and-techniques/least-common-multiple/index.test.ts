import { leastCommonMultiple } from './index';

describe('Least common multiple', () => {
  it('Returns 24 when entered 6 and 8', () => {
    expect(leastCommonMultiple(6, 8)).toEqual(24);
  });

  it('Returns 1933053046 when entered 28851538 and 1183019', () => {
    expect(leastCommonMultiple(28851538, 1183019)).toEqual(1933053046);
  });
});
