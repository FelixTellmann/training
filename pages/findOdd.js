/*
*
  ● findOdd() › findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) should equal 5

* */

export const findOdd = (input) => {
  let oddcount = {};
  let arr = [...input];
  input.reduce((accumulator, item, index, array) => {
    if (!accumulator.includes(item)) {
      oddcount[item] = 1;
      accumulator.push(item);
    } else {
      oddcount[item] = oddcount[item] + 1;
    }
    return accumulator;
  }, []);

  return +Object.entries(oddcount).filter(([key, value]) => {

    return value % 2;
  })[0][0];
};