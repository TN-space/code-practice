arr = [7, 69, 2, 221, 8974];
console.log(arr);

function miniMaxSum(arr) {
  let smallSumArr = [],
    largeSumArr = [],
    smallest = arr[0],
    largest = arr[0],
    smallTotal = 0,
    largeTotal = 0;

  for (let i = 1; i < arr.length; i++) {
    if (smallest <= arr[i]) {
      largeSumArr.push(arr[i]);
    } else {
      largeSumArr.push(smallest);
      smallest = arr[i];
    }
  }
  for (let z = 1; z < arr.length; z++) {
    if (largest >= arr[z]) {
      smallSumArr.push(arr[z]);
    } else {
      smallSumArr.push(largest);
      largest = arr[z];
    }
  }

  for (let item of smallSumArr) {
    smallTotal += item;
  }
  for (let item of largeSumArr) {
    largeTotal += item;
  }
  console.log(smallTotal, largeTotal);
}

miniMaxSum(arr);
