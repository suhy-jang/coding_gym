'use strict';
const expect = require('chai').expect;
const fibonacci = require('../src/index.js');

describe('fibonacci function test', () => {
  it('should return 1 when input is 1', () => {
    const result = fibonacci(1);
    expect(result).to.equal(1);
  });
  it('should return 1 when input is 2', () => {
    const result = fibonacci(2);
    expect(result).to.equal(1);
  });
  it('should return 2 when input is 3', () => {
    const result = fibonacci(3);
    expect(result).to.equal(2);
  });
  it('should return 8 when input is 6', () => {
    const result = fibonacci(6);
    expect(result).to.equal(8);
  });
  it('should return 3 when input is 7', () => {
    const result = fibonacci(7);
    expect(result).to.equal(3);
  });
  it('should return 9 when input is 331', () => {
    const result = fibonacci(331);
    expect(result).to.equal(9);
  });
  it('should return 5 when input is 327305', () => {
    const result = fibonacci(327305);
    expect(result).to.equal(5);
  });
});
