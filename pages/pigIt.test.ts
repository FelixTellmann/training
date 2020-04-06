/*
* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
* */

import { pigIt } from './pigIt';


describe('pigIt()', function () {
  test('pigIt(\'Pig latin is cool\'); // igPay atinlay siay oolcay', () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
  });
  test('pigIt(\'Hello world !\');     // elloHay orldway !', () => {
    expect(pigIt('Hello world !')).toBe('elloHay orldway !');
  });

});