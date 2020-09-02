arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let dia1 = 0,
    dia2 = 0,
    difference,
    z = 0,
    j = arr.length - 1;
  for (let anArr of arr) {
    dia1 = dia1 + anArr[z];
    z++;

    dia2 = dia2 + anArr[j];
    j--;
  }
  difference = Math.abs(dia1 - dia2);
  return difference;
}

diagonalDifference(arr);
