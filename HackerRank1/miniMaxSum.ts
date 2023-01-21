function miniMaxSum(arr: number[]) {
  // Write your code here
  let minSum: number = 0;
  let maxSum: number = 0;
  let onlyMin: number[] = [];
  let onlyMax: number[] = [];

  onlyMin = arr.sort(function (x, y) {
    return x - y;
  });

  for (let i = 0; i < 4; i++) {
    minSum += onlyMin[i];
  }

  onlyMax = arr.sort(function (x, y) {
    return y - x;
  });

  for (let i = 0; i < 4; i++) {
    maxSum += onlyMin[i];
  }

  console.log(minSum + " " + maxSum);
}

// function miniMaxSum(arr) {
//     // Write your code here
//     const array = [...arr].sort((a,b)=>a-b)

//     let dummies = array.shift()
//     let result1 = array.map((item)=>item).reduce((a,b)=> a+b)
//     array.unshift(dummies)

//     let popper = array.pop()
//     let result2 = array.map((item)=>item).reduce((a,b)=> a+b)
//     array.push(popper)

//     console.log(result2,result1)
//   }

// function miniMaxSum(arr) {
//     // Write your code here
//     let minsum = 0;
//     let maxsum = 0;
//     let sorted = arr.sort((x,y)=> x-y);
//     sorted.slice(0,-1).forEach((item) => {minsum += item})
//     sorted.slice(1).forEach((item) => {maxsum += item})
//     console.log(minsum,maxsum);
// }
