/*
* 
* Fastest Code : Equal to 24

This is the Performance version of simple version. If your code runs more than 7000ms, please optimize your code or try the simple version

Task
A game I played when I was young: Draw 4 cards from playing cards, use + - * / and () to make the final results equal to 24.

You will coding in function equalTo24. Function accept 4 parameters a b c d(4 numbers), value range is 1-100.

The result is a string such as "2*2*2*3" ,(4+2)*(5-1); If it is not possible to calculate the 24, please return "It's not possible!"

All four cards are to be used, only use three or two cards are incorrect; Use a card twice or more is incorrect too.

You just need to return one correct solution, don't need to find out all the possibilities.

The diffrent between "challenge version" and "simple version":

1) a,b,c,d range:  In "challenge version" it is 1-100, 
                   In "simple version" it is 1-13.
2) "challenge version" has 1000 random testcases,
   "simple version" only has 20 random testcases.
Some examples:
equalTo24(1,2,3,4) //can return "(1+3)*(2+4)" or "1*2*3*4"
equalTo24(2,3,4,5) //can return "(5+3-2)*4" or "(3+4+5)*2"
equalTo24(3,4,5,6) //can return "(3-4+5)*6"
equalTo24(1,1,1,1) //should return "It's not possible!"
equalTo24(13,13,13,13) //should return "It's not possible!"*/


import { equalTo24 } from './equalTo24';


describe('equalTo24(1,2,3,4)', function () {
  /*test('equalTo24(1,2,3,4) //can return "(1+3)*(2+4)" or "1*2*3*4"', () => {
    expect(equalTo24(1, 2, 3, 4)).toBe("(1+3)*(2+4)" || "1*2*3*4");
  });
  test('equalTo24(2,3,4,5) //can return "(5+3-2)*4" or "(3+4+5)*2"', () => {
    expect(equalTo24(2, 3, 4, 5)).toBe("(5+3-2)*4" || "(3+4+5)*2");
  });
  test('equalTo24(3,4,5,6) //can return "(3-4+5)*6"', () => {
    expect(equalTo24(3, 4, 5, 6)).toBe("(3-4+5)*6");
  });
  test('equalTo24(1,1,1,1) //should return "It\'s not possible!"', () => {
    expect(equalTo24(1, 1, 1, 1)).toBe("It's not possible!");
  });*/
  test('equalTo24(13,13,6,12) // "this one can return 2*(13-(7/7)', () => {
    expect(equalTo24(3, 36, 36, 84)).toBe("36*(3-(84/36))");
  });

});