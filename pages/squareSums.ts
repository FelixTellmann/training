export let square_sums_row = (n) => {
  const squares = [];
  for (let i = 2, s = i * i; s < 2 * n; ++i, s = i * i) {
    squares.push(s);
  }
  const edges = [...Array(n + 1)].map((_, k) => squares.map(x => x - k).filter(x => x <= n && x > 0 && x !== k));

  function search(k, cache, result) {
    result.push(k);
    cache.add(k);
    if (result.length >= n) {
      return result;
    }
    let next = edges[k].filter(x => !cache.has(x))
      .map(x => [x, edges[x].filter(x => !cache.has(x)).length])
      .sort((a, b) => a[1] - b[1]);
    for (let i of next) {
      let v = search(i[0], cache, result);
      if (v) {
        return v;
      }
    }
    cache.delete(k);
    result.pop();
    return false;
  }

  let next = [...Array(n).keys()].sort((i, j) => edges[i + 1].length - edges[j + 1].length);
  for (let i of next) {
    let res = search(i + 1, new Set(), []);
    if (res) {
      return res;
    }
  }
  return false;
};
