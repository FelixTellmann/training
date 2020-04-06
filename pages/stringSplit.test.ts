/*
*
* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*
* */


import { stringSplit } from './stringSplit';


describe('stringSplit()', function () {
  test(`stringSplit('abc') // should return ['ab', 'c_']`, () => {
    expect(stringSplit('abc')).toStrictEqual(['ab', 'c_']);
  });
  test(`stringSplit('abc') // should return ['ab', 'c_']`, () => {
    expect(stringSplit('abcdef')).toStrictEqual(['ab', 'cd', 'ef']);
  });
});
