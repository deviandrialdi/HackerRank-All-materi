function sockMerchant(n: number, ar: number[]): number {
  const ordernedArray = ar.sort((a, b) => a - b);

  let socks: { [index: string]: any } = {};
  let pairs: number = 0;

  ordernedArray.forEach((e) => {
    socks[e] = socks[e] + 1 || 1;
  });
  ordernedArray.forEach((e) => {
    socks[e] = socks[e] % 2 === 0;
    pairs += socks[e];
  });
  return pairs;
}
