/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
*/

import { getCount } from './getCount';


describe('getCount', function () {
  test('getCount("abracadabra") should equal 5', () => {
    expect(getCount("abracadabra")).toBe(5);

  });
});