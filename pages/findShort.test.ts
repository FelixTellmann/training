import { findShort } from './findShort';

/*
* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*
* */

test('findShort', () => {
  expect(findShort("bitcoin take over the world maybe who knows perhaps")).toBe(3);
});
