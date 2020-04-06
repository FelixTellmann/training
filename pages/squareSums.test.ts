/*
* 
* Square sums
Write function that, given an integer number N (in range 2..1000 ; java: 2...1200, all tested!), returns array of integers 1..N arranged in a way, so sum of each 2 consecutive numbers is a square.

Solution is valid if and only if following two criterias are met:

Each number in range 1..N is used once and only once.
Sum of each 2 consecutive numbers is a perfect square.
Example
For N=15 solution could look like this:

[ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]

Verification
All numbers are used once and only once. When sorted in ascending order array looks like this:
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

Sum of each 2 consecutive numbers is a perfect square:
   16    16     16     16     16     16     16
   /+\   /+\    /+\    /+\    /+\    /+\    /+\
[ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
      \+/    \+/    \+/    \+/    \+/    \+/    \+/
       9     25      9     25      9     25      9

9 = 3*3
16 = 4*4
25 = 5*5
If there is no solution, return False (empty vector in C++ ; null in Java).
For example if N=5, then numbers 1,2,3,4,5 cannot be put into square sums row: 1+3=4, 4+5=9, but 2 has no pairs and cannot link [1,3] and [4,5]

Note 1: brute force solutions can only go up to N=50.

Code size is restricted to 20K max, and external modules are disabled: inlining all results precalculated is not an option.*/

import {square_sums_row} from './squareSums';


describe('square_sums_row()', function () {
  test('square_sums_row(15)', ()=> {
    expect(square_sums_row(15)).toBe([ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ])
    
  }); 
  
});