export const equalTo24 = (a, b, c, d) => {

  const o = [   // operations
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b,
  ];
  let os = [                            //operatorStrings
    '+',
    '-',
    '*',
    '/',
  ];


  function testOptions([a, b, c, d]) {
    let optionsArray = [];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {


          if (+(o[i](o[j](a, b), o[k](c, d))).toPrecision(14) === 24) { // (a,b), (c,d)
            optionsArray.push(
              '(' + a + os[j] + b + ')' + os[i] + '(' + c + os[k] + d + ')');
            k = 5;
            j = 5;
            i = 5;
            break;
          }


          if (+(o[i](a, o[j](o[k](b, c), d))).toPrecision(14) === 24) { // a, ((b, c), d)
            optionsArray.push(
              a + os[i] + '(' + '(' + b + os[k] + c + ')' + os[j] + d + ')',
            );
            k = 5;
            j = 5;
            i = 5;
            break;
          }

          /*// 36*(3-(84/36))
          if (a === 36 && b === 3 && c === 84 && d === 36 && i === 2 && j === 1) {
            console.log(o[i](a, o[j](b, o[k](c, d))));
            console.log(+(36 * (3 - (84 / 36))).toPrecision(14));
          }*/

          if (+(o[i](a, o[j](b, o[k](c, d)))).toPrecision(14) === 24) { // a, (b, (c , d))
            optionsArray.push(
              a + os[i] + '(' + b + os[j] + '(' + c + os[k] + d + ')' + ')',
            );
            k = 5;
            j = 5;
            i = 5;
            break;
          }

          /*================ new ones ================*/

          if (+(o[i](o[j](o[k](a, b), c), d)).toPrecision(14) === 24) { // ((a, b), c) d
            optionsArray.push(
              '(' + '(' + a + os[k] + b + ')' + os[j] + c + ')' + os[i] + d,
            );
            k = 5;
            j = 5;
            i = 5;
            break;
          }

          if (+(o[i](o[j](a, o[k](b, c)), d)).toPrecision(14) === 24) { // (a, (b, c)) d
            optionsArray.push(
              '(' + a + os[j] + '(' + b + os[k] + c + ')' + ')' + os[i] + d,
            );
            k = 5;
            j = 5;
            i = 5;
            break;
          }
        }
      }

    }
    return optionsArray;
  }

  function makeOptions(input) {
    let optionsArray = [];

    for (let i = 0; i < input.length; i = i + 1) {
      let rest = makeOptions(input.slice(0, i).concat(input.slice(i + 1)));

      if (!rest.length) {
        optionsArray.push([input[i]]);
      } else {
        for (let j = 0; j < rest.length; j = j + 1) {
          optionsArray.push([input[i]].concat(rest[j]));
        }
      }
    }
    return optionsArray;
  }


  const options = makeOptions([a, b, c, d]);

  let final = [];
  for (let i = 0; i < options.length; i++) {
    if (testOptions(options[i]).length) {
      final = testOptions(options[i])[0];

      break;
    }
  }

  console.log(final);
  return final.length ? final : "It's not possible!";
};