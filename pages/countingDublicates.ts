export const countingDuplicates = (input) => {
  let arr = input.toLowerCase().split('');
  const newArr = Array.from(new Set(input.toLowerCase().split('').map(letter => {
    return arr.filter(letter2 => letter === letter2).join('');
  }).filter(item => item.length > 1)));
  return newArr.length;
};