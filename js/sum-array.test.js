import sumArray from './sum-array.js';

test('sum all numbers in an array', () => {
  const arr = [1, 2, 3, 4];
  expect(sumArray(arr)).toBe(10);
});

test('sum all numbers in an array with negative numbers', () => {
  const arr = [1, 2, -3, 4];
  expect(() => sumArray(arr)).toThrow('Array contains negative numbers');
});