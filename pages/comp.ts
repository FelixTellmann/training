/*
* Remarks
a or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).

If a or b are nil (or null or None), the problem doesn't make sense so return false.

If a or b are empty then the result is self-evident.

a or b are empty or not empty lists.
* */


export const comp = (a, b) => {

  a && a.forEach(n => {
    b && b.find((f, i) => f === n ** 2 && b.splice(i, 1));
  });
  return a && b && b.length === 0;
};