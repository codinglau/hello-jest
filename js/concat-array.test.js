import concatArray from './concat-array.js';

test('concat two arrays', () => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  // toEqual recursively checks every field of an object or array.
  expect(concatArray(arr1, arr2)).toEqual([1, 2, 3, 4]);
});