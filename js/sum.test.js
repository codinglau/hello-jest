import sum from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  // toBe uses Object.is to test exact equality
  expect(sum(1, 2)).toBe(3);
});