function birthday(s: number[], d: number, m: number): number {
  // Write your code here
  let div: number = 0;
  for (let i = 0; i < s.length; i++) {
    const chocodiv = s.slice(i, i + m);
    const sum = chocodiv.reduce((a, b) => a + b);
    if (sum === d) {
      div += 1;
    }
  }
  return div;
}
