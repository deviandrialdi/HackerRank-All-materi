function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  let sum: number = 0;
  let pairs: number = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      sum = ar[i] + ar[j];
      if (sum % k == 0) {
        pairs++;
      }
    }
  }
  return pairs;
}

function main() {
  const n: number = 6;
  const k: number = 3;
  const ar: number[] = [1, 3, 2, 6, 1, 2];
  const result: number = divisibleSumPairs(n, k, ar);
  console.log(result);
}

main();
