function pageCount(n: number, p: number): number {
  // Write your code here
  const pagesAmount = Math.floor(n / 2);
  const wantedIndex = Math.floor(p / 2);

  return Math.min(wantedIndex - 0, pagesAmount - wantedIndex);
}
