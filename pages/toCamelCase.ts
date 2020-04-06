export const toCamelCase = (str) => {
  return str.replace(/(?<=(_|-))\w/gi, m => m.toUpperCase()).replace(/-|_/g, '');
};