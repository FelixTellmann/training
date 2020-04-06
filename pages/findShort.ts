export const findShort = (str: string) => {

  return str.split(' ').sort((a,b) => a.length - b.length)[0].length
}