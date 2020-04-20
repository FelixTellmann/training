export const solve = (x, y) => {
  let [a, b] = [BigInt(x).toString(), BigInt(y).toString()];
  let counter = 0;
  let totalIterations = 0;

  let aArray = [];
  let bArray = [];
  let oddMiddles = ['0', '1', '8'];
  let evenMiddles = ['00', '11', '69', '88', '96'];
  let outers = ['11', '69', '88', '96'];

  /*============================================================================
    # B
      -
  ==============================================================================*/
  function sumUp(num, input, iterator = undefined) {
    if (!num) {
      return;
    }
    num = '' + num;
    let arr = [];
    for (let i = 1; i < num.length + 1; i++) {
      switch (i) {
        case 1:
          if (+num === 0) {
            arr.push(0);
          } else if (+num < 8) {
            arr.push(2);
          } else {
            arr.push(3);
          }
          break;
        case 2:
          if (iterator && num.length % 2 === 0) {
            arr.push(5);
          } else {
            arr.push(4);
          }
          break;
        case 3:
          arr.push(3 * 4);
          break;
        case 4:
          arr.push(4 * 5);
          break;
        default:
          arr.push(arr[i - 3] * 5);
      }
    }
    console.log(arr);
    arr.reverse();
    if (num.length > 1) {
      if (num.charAt(0) === '1') {
        arr[0] = 0;
      } else if ((num.charAt(0) === '7' || num.charAt(0) === '8')) {
        arr[0] = arr[0] / 4 * 2;
      } else if ((num.charAt(0) === '9')) {
        arr[0] = arr[0] / 4 * 3;
      } else if ((num.charAt(0) === '0')) {
        arr[0] = arr[0] / 4 * 4;
      } else {
        arr[0] = arr[0] / 4;
      }
    }
    if (iterator && num.length === 2) {
      if (+num >= 96) {
        arr[0] = 5;
      } else if (+num >= 88) {
        arr[0] = 4;
      } else if (+num >= 69) {
        arr[0] = 3;
      } else if (+num >= 11) {
        arr[0] = 2;
      } else {
        arr[0] = 1;
      }
    }
    if (!iterator && input === 'a' && num.length === 2) {
      if (+num >= 96) {
        arr[0] = 4;
      } else if (+num >= 88) {
        arr[0] = 3;
      } else if (+num >= 69) {
        arr[0] = 2;
      } else if (+num >= 11) {
        arr[0] = 1;
      }
    }

    if (iterator && iterator % 2 === 0) {
      for (let i = 0; i < arr.length; i++) {
        i % 2 !== 0 && (arr[i] = 0);
      }
    }


    if (iterator && iterator % 2 !== 0) {
      for (let i = 0; i < arr.length; i++) {
        i % 2 !== 0 && (arr[i] = 0);
      }
    }
    if (input === 'b') {
      bArray.push(arr.reduce((arr, item) => {
        arr += item;
        return arr;
      }, 0));
    } else if (input === 'a') {
      aArray.push(arr.reduce((arr, item) => {
        arr += item;
        return arr;
      }, 0));
    }
    console.log(arr);

    if (num.length > 2) {
      console.log(+num.substr(1, num.length - 2));
      sumUp(num.match(/^[1689]/) && +num.substr(1, num.length - 2), input, num.substr(1, num.length - 2).length);
    }
  }

  /*for (let i = x; i <= y; i++) {
    let length = 0;

    i = i.toString();
    let match = (/[23457]/).exec(i);
    if (match) {
      let { index } = match;
      length = i.length;
      i = i.substr(0, index) + `${match[0] === '7' ? '8' : '6'}` + i.substr(index + 1, i.length)
        .replace(/\d/g, '0');
    }
    if (i === i.replace(/[69]/g, (m => m === '6' ? '9' : '6')).split('').reverse().join('') && i <= y) {
      //console.log(i + ' ' + i.replace(/[69]/g, (m => m === '6' ? '9' : '6')).split('').reverse().join(''));

      counter++;
    }
    totalIterations++;
  }*/
  sumUp(b, 'b');
  sumUp(a, 'a');

  /*console.log(bArray);
  console.log(aArray);
  console.log(counter);*/
  /*console.log(aArray);
  console.log(bArray);
  console.log(bArray.reduce((a, i) => a += i) - aArray.reduce((a, i) => a += i));*/
  console.log(x + ', ' + y + ' equals  upside down numbers. in  iterations');
  return bArray.reduce((a, i) => a += i) - aArray.reduce((a, i) => a += i);
};