export const square_sums_row = (n) => {
  /*================ Prep Data Models ================*/
  let test = [...Array(n).keys()].map(i => i + 1); // [1 , 2, ,3 , 4 , n, ...n1 ]

  const squareArrMaker = (k) => {
    let i = 2;
    let arr = [];
    while (i * i < k + k - 1) {
      arr.push(i * i);
      i++;
    }
    return arr;
  };
  let squareArray = squareArrMaker(n); // [ 4, 9, 16, n, ... n1]
  let trialTree = {};
  test.map(a => {
    test.forEach(b => {
      if (a !== b && squareArray.find(item => item === a + b)) {
        trialTree[a]?.push(b) || (trialTree[a] = [b]);
      }
    });
  });
  let graph = [[]];

  console.log(trialTree);
  let tree = JSON.parse(JSON.stringify(trialTree));
  let backlog = [];

  /*================ testing aboce ================*/

  function createGraph(n0, tree, i = 0) {
    if (Object.keys(tree).length === 0) {
      console.log('ayay');
      return false;
    }
    if (!tree[n0]) {
      if (i > 10) {
        return false;
      }
      if (graph[i].length === 0) {
        /*if (backlog.length) {
          backlog.forEach(item => {
            i++;
            graph[i] = [];
            createGraph(item, tree, i);
          });
        } else {*/
          /*i++;
          graph[i] = [];*/
          createGraph(tree[Object.keys(tree)[0]][0], tree, i)
        /*}*/
      }
      if (graph[i].filter(f => f === graph[i][0]).length > 2 && graph[i].filter(f => f === graph[i][graph[i].length - 1]).length > 2) {
        graph[i].shift();
        graph[i].shift();
        graph[i].pop();
        graph[i].pop();
        backlog = graph[i][graph[i].length - 1];
        i++;
        graph[i] = [];
        createGraph(graph[i - 1][0], tree, i);
      } else if (graph[i].filter(f => f === graph[i][0]).length > 2) {
        graph[i].shift();
        graph[i].shift();
        i++;
        graph[i] = [];
        createGraph(graph[i - 1][0], tree, i);
      } else if (graph[i].filter(f => f === graph[i][graph[i].length - 1]).length > 2) {
        graph[i].pop();
        graph[i].pop();
        i++;
        graph[i] = [];
        createGraph(graph[i - 1][graph[i - 1].length - 1], tree, i);
      }
      return false;
    }

    let n1 = tree[n0][0];
    graph[i].push(n0);
    graph[i].push(n1);
    tree[n1] = tree[n1].filter(f => f !== n0);
    tree[n0] = tree[n0].filter(f => f !== n1);
    tree[n1].length === 0 && delete tree[n1];
    tree[n0].length === 0 && delete tree[n0];
    createGraph(n1, tree, i);
  }

  createGraph(1, tree);
  console.log(tree, graph);

  return '';
};


/*
* const isSquare = (n, max) => {
    let i = 2;
    while (i * i < max + max - 1) {
      if (n === i * i) {
        return true;
      }
      i++;
    }
    return false;
  };
  const findPartners = (n, max, graph) => {
    let arr = [];
    for (let i = 0; i < max; i++) {
      if (n !== i && isSquare(n + i, max) && !graph.find(f => f === i)) {
        arr.push(i);
      }
    }
    return arr;
  };

  const assembleArray = (max) => {
    let n = 1; // starting /current number
    let i = 0; // iteration count
    let graph = []; // array to collect in;
    graph.push(n);
    while (graph.length < max && i < 10) {
      n = findPartners(n, max, graph)[0];
      if (n === undefined) {
        n = findPartners(graph[0], max, graph)[0];
        graph.unshift(n);
      } else {
        graph.push(n);
      }
      i++;
    }
    return graph;
  };
  * */