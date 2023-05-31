import combineObject from './combine-object.js';

test('combine two objects', () => {
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  // toEqual recursively checks every field of an object or array.
  expect(combineObject(obj1, obj2)).toEqual({ a: 1, b: 2 });
});

test('combine two objects with undefined', () => {
  const obj1 = { a: 1 };
  const obj2 = { b: 2, a: undefined };
  // toEqual recursively checks every field of an object or array.
  expect(combineObject(obj1, obj2)).toEqual({ a: undefined, b: 2 });
});