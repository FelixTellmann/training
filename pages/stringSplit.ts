export const stringSplit = (input) => {
  const output = input.split('').reduce((acc, item, index, array) => {
    if (index % 2) {
      acc.push('');
      acc[index - 1] = acc[index - 1] + item;
    } else {
      acc.push(item);
    }
    if (array.length - 1 === index && !(index % 2)) {
      acc[acc.length - 1] = acc[acc.length - 1] + "_";
    }
    return acc;
  }, []).filter(e => e);


  return output;
};