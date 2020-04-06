export const rgb = (...args) => {
  function convert(i) {
    let result = (i > 255 ? 255 : (i < 0 ? 0 : i)).toString(16);
    return result.length === 1 ? "0" + result : result;
  }

  return args.map(e => convert(e)).join('').toUpperCase();
};