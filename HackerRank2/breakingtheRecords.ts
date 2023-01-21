function breakingRecords(scores: number[]): number[] {
  let minScore: number = scores[0];
  let maxScore: number = scores[0];
  let brokeBestRec: number = 0;
  let brokeWorsRec: number = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < minScore) {
      minScore = scores[i];
      brokeWorsRec++;
    }
    if (scores[i] > maxScore) {
      maxScore = scores[i];
      brokeBestRec++;
    }
  }
  return [brokeBestRec, brokeWorsRec];
}

function main() {
  const scores: number[] = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
  const result: number[] = breakingRecords(scores);
  console.log(result);
}
main();
