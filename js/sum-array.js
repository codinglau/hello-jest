// sum all numbers in an array of positive numbers
export default function sumArray(arr) {
  // check if all numbers in the array are positive
  // otherwise throw an error
  const isAllPositive = arr.every(num => num >= 0);
  if (!isAllPositive) {
    throw new Error('Array contains negative numbers');
  } 

  // sum all numbers in the array if all numbers are positive
  return arr.reduce((total, num) => total + num, 0);
}