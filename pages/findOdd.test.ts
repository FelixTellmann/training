/*
* 
* Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

* 
* */

import { findOdd } from './findOdd';


describe('findOdd()', function () {
  test('findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) should equal 5', () => {
    expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toBe(5);
  });
  test('findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) should equal -1', () => {
    expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1);
  });
  test('findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ]) should equal -1', () => {
    expect(findOdd([ 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1 ])).toBe(10);
  });
});