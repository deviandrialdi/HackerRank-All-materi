function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  let pairCountsMap: Map<number, number> = new Map<number, number>();
  let updatedValue = 0;
  let pairCounter = 0;

  for (let i = 0; i < ar.length; i++) {
    const colorId = ar[i];
    updatedValue = pairCountsMap.has(colorId)
      ? <number>pairCountsMap.get(colorId) + 1
      : 1;
    pairCountsMap.set(colorId, updatedValue);
  }

  pairCountsMap.forEach((value, key) => {
    pairCounter += Math.floor(value / 2);
  });

  return pairCounter;
}
