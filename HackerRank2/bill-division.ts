function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  let Anna: number = 0;
  let total: number = 0;

  for (let i = 0; i < bill.length; i++) {
    total += bill[i];
  }
  Anna = b - (total - bill[k]) / 2;
  if (Anna > 0) {
    console.log(Anna);
  } else {
    console.log("Bon Appetit");
  }
}
