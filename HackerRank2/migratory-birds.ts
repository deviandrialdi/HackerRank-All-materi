function migratoryBirds(arr: number[]): number {
  // Write your code here

  let max_count: number = 0;
  let op: number = 0;
  let data = arr.sort((a, b) => a - b);

  for (let i: number = 0; i < data.length; i++) {
    let count: number = 0;

    for (let j: number = i; j < data.length; j++) {
      if (data[i] == data[j]) {
        count++;
      }
    }
    if (count > max_count) {
      max_count = count;
      op = data[i];
    } else if (count == max_count) {
      op == data[i];
    }
  }
  return op;
}
