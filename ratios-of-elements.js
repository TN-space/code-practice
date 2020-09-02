console.log("objectnow");

arr = [-4, 3, -9, 0, 4, 1];

// Complete the plusMinus function below.
function plusMinus(arr) {
  let neg = 0,
    pos = 0,
    zero = 0,
    total = arr.length;
  for (const el of arr) {
    if (el < 0) {
      neg++;
    } else if (el > 0) {
      pos++;
    } else {
      zero++;
    }
  }
  console.log((pos / total).toFixed(6));
  console.log((neg / total).toFixed(6));
  console.log((zero / total).toFixed(6));
}

plusMinus(arr);
