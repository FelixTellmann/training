export const fib = (n) => {

  let negator = '';
  if (n < 0) {
    n = -n;
    negator = '-';
  }
  n % 2 > 0 && (negator = '');

  const fibRecursion = (n) => {
    if (n === 0) {
      return [0n, 1n];
    }

    let [a, b] = fibRecursion(Math.floor(n / 2));
    let c = a * (b * 2n - a);
    let d = a * a + b * b;
    if (n % 2 === 0)
      return [c, d];
    else
      return [d, c + d];

  };
  return BigInt(negator + fibRecursion(n)[0].toString());
};

/*

def _fib(n):
	if n == 0:
		return (0, 1)
	else:

		a, b = _fib(Math.floor(n / 2))
		c = a * (b * 2 - a)
		d = a * a + b * b

		if n % 2 == 0:
			return (c, d)
		else:
			return (d, c + d)


			* */