/*
* Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.

More examples in the test cases.

Good luck!

If you like this Kata, please try

Simple Prime Streaming

Life without primes

Please also try the performance version of this kata at Upside down numbers - Challenge Edition
* */

import { solve } from './upsideDownNumbers';

describe('solve()', function () {
  test('solve(60796, 130366),53)', () => {
    expect(solve(15, 886403)).toBe(959);
  });
  /*test('solve(10,100),3)', () => {
    expect(solve(10, 100)).toBe(4);
  });*/
  /*test('solve(1000,1000),3)', () => {
    expect(solve(1000, 1000)).toBe(20);
  });
  test('solve(10000,15000),3)', () => {
    expect(solve(10000, 15000)).toBe(6);
  });
  test('solve(15000,20000),3)', () => {
    expect(solve(15000, 20000)).toBe(9);
  });
  test('solve(60000,70000),3)', () => {
    expect(solve(60000, 70000)).toBe(15);
  });
  test('solve(60000,130000),3)', () => {
    expect(solve(60000, 130000)).toBe(5);
  });*/
});


/*

solve(0,10),3)
solve(10,100),4)
solve(100,1000),12)
solve(1000,10000),20)
solve(10000,15000),6)
solve(15000,20000),9)
solve(60000,70000),15)
solve(60000,130000),55)

*/