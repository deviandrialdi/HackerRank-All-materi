function birthdayCakeCandles(candles: number[]): number {
  // Write your code here

  let maxNum: number = Math.max(...candles.map((o) => o));
  let cont: number = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == maxNum) {
      cont++;
    }
  }
  return cont;
}
