import { number } from "prop-types";

export const square_sums_row = (input) => {
  let test = [...Array(input).keys()].map(i => i + 1);

  const squareArrMaker = (k) => {
    let i = 2;
    let arr = [];
    while (i * i < k + k - 1) {
      arr.push(i * i);
      i++;
    }
    return arr;
  };

  let squares = squareArrMaker(input); // create squareArray up until smaller than n^e + n^e - 1

  let trialTree = {};
  test.map(a => {
    test.forEach(b => {
      if (a !== b && squares.find(item => item === a + b)) {
        trialTree[a]?.push(b) || (trialTree[a] = [b]);
      }
    });
  });

  const findShortestItemIndex = (Obj) => {
    return Obj !== {} && +Object.entries(Obj).sort((a, b) => a[1].length - b[1].length)[0][0];
  };
  /*
    console.log(trialTree);*/

  let counter = [[]];
  let tree = JSON.parse(JSON.stringify(trialTree));

  const tryNext = (ObjTree, n0, run) => { // 8
    console.log(n0, run)
    if (!ObjTree[n0][0]) {
      counter[run].push(n0);
      delete ObjTree[n0];
      run++;
      counter[run] = [];
      Object.entries(ObjTree).length ? tryNext(ObjTree, findShortestItemIndex(ObjTree), run) : console.log('not executied');
      if (Object.entries(ObjTree).length === 0) {
        console.log('test');
        return false;
      }
    }
    let n1 = ObjTree[n0][0]; // 1

    counter[run].push(n0);

    ObjTree[n0] && ObjTree[n0].indexOf(n1) !== -1 && ObjTree[n0].splice(ObjTree[n0].indexOf(n1), 1);
    ObjTree[n0].length === 0 && delete ObjTree[n0];
    if (counter[run].find(e => e === n1)) {
      console.log(ObjTree[22])
      counter[run].push([n1]);
      delete ObjTree[n1];
      run++;
      counter[run] = [];
      Object.entries(ObjTree).length ? tryNext(ObjTree, findShortestItemIndex(ObjTree), run) : console.log('not executied');
      if (Object.entries(ObjTree).length === 0) {
        console.log('test2');
        return false;
      }
    }
    ObjTree[n1] && ObjTree[n1].indexOf(n0) !== -1 && ObjTree[n1].splice(ObjTree[n1].indexOf(n0), 1);


    ObjTree[n1] && tryNext(ObjTree, n1, run);
  };


  tryNext(tree, findShortestItemIndex(tree), 0);
  console.log(counter);
  /*  console.log(tree);
    console.log(counter);*/
  /*console.log(counter);
  console.log(tree);*/

  return '';
};


