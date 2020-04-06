/*
* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
* 
* */

import { toCamelCase } from './toCamelCase';


describe('toCamelCase()', function () {
  test('toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"', () => {
    expect(toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior");
  });
  test('toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"', () => {
    expect(toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
  });
  test('toCamelCase("the_stealth_warrior"), "theStealthWarrior",', () => {
    expect(toCamelCase("the_stealth-warrior")).toBe("theStealthWarrior");
  });

});