function countingValleys(steps: number, path: string): number {
  // Write your code here
  let pathTracking = 0;
  let valleysCounter = 0;

  for (let i = 0; i < steps; i++) {
    const element = path.charAt(i);
    const updatedTracking = pathTracking + (element === "U" ? 1 : -1);

    if (pathTracking == 0 && updatedTracking < 0) {
      valleysCounter++;
    }
    pathTracking = updatedTracking;
  }
  return valleysCounter;
}
