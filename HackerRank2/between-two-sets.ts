function getTotalX(a: number[], b: number[]): number {
  // Write your code here
  let count = 0;
  let first = a[a.length - 1];
  let last = b[0];

  for (let i = first; i <= last; i++) {
    // checks if every element in array a is factor of i &&
    // i is factor of every element in the array
    // then count + 1
    if (
      a.every((x) => i % x == 0) == true &&
      b.every((x) => x % i == 0) == true
    ) {
      count++;
    }
  }
  return count;
}
