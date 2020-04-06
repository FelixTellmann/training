export const alphabetPosition = (str) => {
  return str.toUpperCase().split('').reduce((newArr, i) => {
    if (i.charCodeAt(0) > 64 && i.charCodeAt(0) < 65 + 26) {
      newArr.push(i.charCodeAt(0) - 64);
    }
    return newArr;
  }, []).join(' ');
};
