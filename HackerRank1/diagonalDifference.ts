function diagonalDifference(arr: number[][]) {
  // Write your code here
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j);
      if (i == j) {
        num1 += arr[i][j];
      }
      if (i + j == arr.length - 1) {
        num2 += arr[i][j];
      }
    }
  }
  console.log(num1, num2);
  return Math.abs(num1 - num2);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
