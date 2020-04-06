/*
*
*Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
* 
*
*/
import { primeFactors } from './primeFactors';


describe('primeFactors()', function () {
  test('primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")', () => {
    expect(primeFactors(7775460)).toBe("(2**2)(3**3)(5)(7)(11**2)(17)");

  });
});