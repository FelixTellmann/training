import React from 'react';
import { testing, fearNotLetter, countBitsInNumToBinaryInput } from './index';
import exp from "constants";


test('testing("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
  expect(testing("ATCGA")).toMatchObject([["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]);
});


describe('find the missing letter', function () {
  test(`fearNotLetter("abce") should return "d"`, () => {
    expect(fearNotLetter("abce")).toBe("d");
  });
  test(`fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.`, () => {
    expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toBe(undefined);
  });
  test(`fearNotLetter("abcdefghjklmno") should return "i".`, () => {
    expect(fearNotLetter("abcdefghjklmno")).toBe("i");
  });
  test(`fearNotLetter("stvwx") should return "u".`, () => {
    expect(fearNotLetter("stvwx")).toBe("u");
  });
});
/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcdf") should return "e".
*/

describe('countBitsInNumToBinaryInput', function () {
  test('test(4) should return 1', () => {
    expect(countBitsInNumToBinaryInput(0)).toBe(0);
    expect(countBitsInNumToBinaryInput(4)).toBe(1);
    expect(countBitsInNumToBinaryInput(7)).toBe(3);
    expect(countBitsInNumToBinaryInput(9)).toBe(2);
    expect(countBitsInNumToBinaryInput(10)).toBe(2);
  });
});
/*
Write a function that takes an integer as input, and returns the number
of bits that are equal to one in the binary representation of that number.
You can guarantee that input is non-negative.

The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */