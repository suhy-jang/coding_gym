'use strict';
const { expect } = require('chai');
const gcd = require('../lib/index').default;

describe('Greatest common divisor', () => {
  it('GCD(18,35) = 1', () => {
    expect(gcd(18, 35)).equals(1);
  });
  it('GCD(28851538,1183019) = 17657', () => {
    expect(gcd(28851538, 1183019)).equals(17657);
  });
});
