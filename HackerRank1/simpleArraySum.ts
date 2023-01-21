function simpleArraySum(ar: number[]): number {
  // Write your code here

  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
}

// 6
// 1 2 3 4 10 11 // 31
