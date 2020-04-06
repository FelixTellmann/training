export const pigIt = (str) => {
  let output = str.split(' ').map((w) => {

    let fl = w.charAt(0);
    return w.match(/^\w/i) && w.replace(/^\w/i, '') + fl + 'ay' || w;
  });
  return output.join(' ');
};