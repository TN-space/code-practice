console.log("hey");

const ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  let answer = 0;
  for (let el of ar) {
    answer = answer + el;
    // console.log("answer", answer);
  }
  return answer;
}

simpleArraySum(ar);
