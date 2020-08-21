ar = [3, 2, 1, 3];

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  let count = 0;

  let max = ar.reduce(function (a, b) {
    return Math.max(a, b);
  });
  for (const candle of ar) {
    if (candle === max) {
      count += 1;
    }
  }

  console.log(count);
}

birthdayCakeCandles(ar);
