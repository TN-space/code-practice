console.log("object");

a = [17, 28, 30];
b = [99, 16, 8];

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let result = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0] = result[0] + 1;
      //   console.log("result0", result[0]);
      //   console.log(i);
    } else if (a[i] < b[i]) {
      result[1] = result[1] + 1;
      //   console.log("result1", result[1]);
      //   console.log(i);
    }
  }
  //   console.log(result);
  return result;
}

compareTriplets(a, b);
