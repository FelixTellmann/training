export const primeFactors = (input) => {
  let primeCounter = [];
  let toDeFactor = input;
  let p = 2;
  while (p * p <= toDeFactor) {
    toDeFactor % p === 0 ? primeCounter.push(p) && (toDeFactor /= p) : (p === 2 ? p++ : p+=2);
  }

  return primeCounter.push(toDeFactor) && primeCounter.reduce((acc, a, i) => {
    if (i > 0 && acc[acc.length - 1][0] === a) {
      acc[acc.length - 1][1]++;
    } else {
      acc.push([a, 1]);
    }
    return acc;
  }, []).map(f => `(${f[1] === 1 ? f[0] : `${f[0]}**${f[1]}`})`).join('');
};


/*const primer = (n) => {
  if (toDeFactor === p) {
    primeCounter.push(p);
    return primeCounter.reduce((acc, a, i) => {
      if (i > 0 && acc[acc.length - 1][0] === a) {
        acc[acc.length - 1][1]++;
      } else {
        acc.push([a, 1]);
      }
      return acc;
    }, []).map(f => `(${f[1] === 1 ? f[0] : `${f[0]}**${f[1]}`})`).join('');
  } else {
    n % p === 0 ? primeCounter.push(p) && (toDeFactor /= p) : (p === 2 ? p++ : p+=2);
    return primer(toDeFactor);
  }
};*/