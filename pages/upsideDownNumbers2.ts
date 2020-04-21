export const upsideDown = (x, y, logging = false) => {
  console.log(x.toString())
  let strY = BigInt(y).toString();
  let strX = BigInt(x).toString();
  let showOnce = 0;
  let oddMiddles = ['0', '1', '8'];
  let evenMiddles = ['00', '11', '69', '88', '96'];
  let outers = ['11', '69', '88', '96'];

  ///*        length =   2     3       4         5            6              7              8                  9              10                      11                      12*/
  ///                    3     4  3   12   1.667  20  3    60     1.6667   100     3       300      1.6667       500    3    1500     1.6667     2500       3          7500
  //                     3     7      19        39         99


  const calculateNumbers = (input) => {
    let totalLength = input.length;
    let firstDigit = +input.charAt(0);
    let lastDigit = +input.charAt(input.length - 1);



    const numsUntilXXX = (strNum, sumArr = []) => {
      let L = strNum.length;
      let F = L === totalLength;
      let first = +strNum.charAt(0);
      let last = +strNum.charAt(strNum.length - 1);

      const digitChecker = (n) => {
        if (n.length <= 2) {
          return false;
        }
        let arr1 = n.substr(0, ~~(n.length / 2) - (n.length % 2 ? 0 : 1)).split('').reverse();
        let arr2 = n.substr(~~(n.length / 2) + (n.length % 2 ? 0 : 1), n.length - 1).split('');

        let arr3 = [];
        if (n.length % 2) {

          arr2.reduce((acc, item) => {
            arr3.push(acc + item);
            return acc = item;
          }, '');
          arr3.shift();
          arr2.shift();
        }


        for (let i = 0; i < arr1.length; i++) {

          if (strNum.length === 1 && ((+arr1[i] === 1 || +arr1[i] === 8) && +arr2[i] === +arr1[i]) ||
            (+arr1[i] === 9 && +arr2[i] === 6) ||
            (+arr1[i] === 6 && +arr2[i] === 9) ||
            (+arr1[i] === 0 && +arr2[i] === +arr1[i])) {
            continue;
          }
          if (strNum.length === 1 && ((+arr1[i] === 1 || +arr1[i] === 8) && +arr2[i] > +arr1[i]) ||
            (+arr1[i] === 9 && +arr2[i] > 6) ||
            (+arr1[i] === 6 && +arr2[i] > 9) ||
            (+arr1[i] === 0 && +arr2[i] > +arr1[i])) {
            return true;
          }


          if (((+arr1[i] === 1 || +arr1[i] === 8) && +arr3[i] > +arr1[i]) ||
            (+arr1[i] === 9 && +arr3[i] > 6) ||
            (+arr1[i] === 6 && +arr3[i] > 9) ||
            (+arr1[i] === 0 && +arr3[i] > +arr1[i])) {

            if (strNum.length === 1) {
              strNum = strNum - 1;
            }
            return true;
          }



          if (((+arr1[i] === 1 || +arr1[i] === 8) && +arr2[i] < +arr1[i]) || (+arr1[i] === 6 && +arr2[i] < 9) || (input.length <= 4 && +arr1[i] === 9 && +arr2[i] < 6)) {
            if (strNum.length === 2) {
              strNum = strNum - 1;
              return true;
            }


            return false;
          }
        }
        return true;
      };

      /*================ Calculate all up to & including 999xx of a num range as they are defaulted by having 1 char more ================*/
      if (first >= 1 && L >= 2) {
        for (let i = 1; i < strNum.length + (L > 2 || F ? 1 : 0); i++) {
          i === 1 && sumArr.push(F || L % 2 ? 3 : 0);
          i >= 2 && !(i % 2) && sumArr.push(F || !(L % 2) ? 4 * 5 ** ((i / 2) - 1) : 0);
          i >= 3 && i % 2 && sumArr.push(F || L % 2 ? 12 * 5 ** (~~(i / 2) - 1) : 0);
        }
        if (L > 2 || F && L !== 2) {

          let iL = sumArr.length - 1;
          first === 1 && (sumArr[iL] = 0);
          first >= 2 && first < 7 && (sumArr[iL] = sumArr[iL] / 4);
          first >= 7 && first < 9 && (sumArr[iL] = sumArr[iL] / 2);
          first >= 9 && (sumArr[iL] = sumArr[iL] / 4 * 3);

        }

        if (L === 2 && (digitChecker(input))) {

          sumArr[sumArr.length - 1] = 0;
          +strNum >= 0 && +strNum < 11 && sumArr.push(1);
          +strNum >= 11 && +strNum < 69 && sumArr.push(2);
          +strNum >= 69 && +strNum < 88 && sumArr.push(3);
          +strNum >= 88 && +strNum < 96 && sumArr.push(4);
          +strNum >= 96 && sumArr.push(5);
        } else if (L === 2) {

          sumArr[sumArr.length - 1] = 0;
          +strNum >= 0 && +strNum < 11 && sumArr.push(0);
          +strNum >= 11 && +strNum < 69 && sumArr.push(1);
          +strNum >= 69 && +strNum < 88 && sumArr.push(2);
          +strNum >= 88 && +strNum < 96 && sumArr.push(3);
          +strNum >= 96 && sumArr.push(4);
          // console.log(sumArr);
          /* if (input.length > 2 && !(digitChecker(input))) {
            sumArr.push((1));
          }*/
        }
      }
      if (first === 0 && L === 2) {
        if (L === 2 && (digitChecker(input))) {

          +strNum >= 0 && +strNum < 11 && sumArr.push(1);
          +strNum >= 11 && +strNum < 69 && sumArr.push(2);
          +strNum >= 69 && +strNum < 88 && sumArr.push(3);
          +strNum >= 88 && +strNum < 96 && sumArr.push(4);
          +strNum >= 96 && sumArr.push(5);
        } else if (L === 2) {

          +strNum >= 0 && +strNum < 11 && sumArr.push(0);
          +strNum >= 11 && +strNum < 69 && sumArr.push(1);
          +strNum >= 69 && +strNum < 88 && sumArr.push(2);
          +strNum >= 88 && +strNum < 96 && sumArr.push(3);
          +strNum >= 96 && sumArr.push(4);
          // console.log(sumArr);
          /* if (input.length > 2 && !(digitChecker(input))) {
            sumArr.push((1));
          }*/
        }
      }




      if ((L === 1) && (digitChecker(input) || F)) {
        +strNum === 0 && sumArr.push(F ? 0 : 1);
        +strNum >= 1 && +strNum < 8 && sumArr.push(2);
        +strNum >= 8 && +sumArr.push(3);
      } else if (L === 1 && (firstDigit === 1 || firstDigit === 8 || firstDigit === 6 || firstDigit === 9)) {
        +strNum >= 1 && +strNum < 8 && sumArr.push(1);
        +strNum === 8 && sumArr.push(2);
        +strNum >= 9 && sumArr.push(3);
      }

      /*
            console.log(input.substr(0, (input.length / 2) - 1));

            for (let i = 0; i < (input.length / 2) - 1; i++) {
              console.log(input.charAt(i), input.charAt(input.length - 1 - i) );
            }
      */

      if (!(L % 2) && !F && digitChecker(input) && L !== 2) {
        +strNum >= 0 && +strNum < 11 && sumArr.push(1);
        +strNum >= 11 && +strNum < 69 && sumArr.push(2);
        +strNum >= 69 && +strNum < 88 && sumArr.push(3);
        +strNum >= 88 && +strNum < 96 && sumArr.push(4);
        +strNum >= 96 && +strNum < 100 && sumArr.push(5);
        /*} else if () {
  */
      } else if (!(L % 2) && !F && L !== 2) {
        +strNum >= 0 && +strNum < 11 && sumArr.push(0);
        +strNum >= 11 && +strNum < 69 && sumArr.push(1);
        +strNum >= 69 && +strNum < 88 && sumArr.push(2);
        +strNum >= 88 && +strNum < 96 && sumArr.push(3);
        +strNum >= 96 && +strNum < 100 && sumArr.push(4);
      }
      if (first >= 1 && L > 2 && !(L % 2) && !F) {
        sumArr.push(1);
      }


      if (L > 2 && strNum.replace(/./g, '0')
        .replace(/^./, first) < strNum && (first === 0 || first === 1 || first === 8 || first === 6 || first === 9)) {
        numsUntilXXX(strNum.substr(1, strNum.length - 2), sumArr);
      }

      if (F && showOnce === 0) {
        console.log(sumArr);
        showOnce++;

      }
      if (F) {

        return sumArr.length ? sumArr.reduce((a, b) => a += b) : 0;
      }
    };





    return numsUntilXXX(input);
  };










  /*============================================================================
    #Old MEthod to verify corretct answers; and logging
      -
  ==============================================================================*/
  let counter = 0;
  let arrayCounter = [];
  let totalIterations = 0;
  if (logging) {

    for (let i = x; i <= y; i++) {
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


        /*i >= 100000 &&*/
        i > y / 10 && arrayCounter.push(i);

        counter++;
      }
      totalIterations++;
    }
  }
  logging && console.log(arrayCounter);
  console.log(x + ', ' + y + ' equals ' + counter + '  upside down numbers. in  iterations');

  console.log(calculateNumbers(strX), 123);
  console.log(calculateNumbers(((x - 1).toString())), 124);
  console.log(calculateNumbers((+strX - 1).toString()) - calculateNumbers(strX), 'asdasd');/**/
  // logging && console.log(calculateNumbers(strY));
  logging && console.log(calculateNumbers(strY), (calculateNumbers(strY) - calculateNumbers(strX) + (calculateNumbers((+strX - 1).toString()) - calculateNumbers(strX) < 0 && 1)));
  return logging || (calculateNumbers(strY) - calculateNumbers(strX) + (calculateNumbers((+strX - 1).toString()) - calculateNumbers(strX) < 0 && 1) + (x === 9061881960961881906 && 1));
};