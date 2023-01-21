function staircase(n: number): void {
  let len = n;
  for (let i = 1; i < n + 1; i++) {
    console.log(" ".repeat(len - 1) + "#".repeat(i));
    len--;
  }
}

staircase(6);
