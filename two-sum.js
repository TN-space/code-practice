/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let addableNums = [];
  let answer = [];

  for (i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      addableNums.push(nums[i]);
    }
  }
  console.log(addableNums);

  let a = 0,
    b = 1;
  while (a <= addableNums.length) {
    for (b = 1; b <= addableNums.length; b++) {
      if (addableNums[a] + addableNums[b] === target) {
        answer.push(a, b);
        console.log(`${addableNums[a]} + ${addableNums[b]} = ${target}`);
        console.log("answer", answer);
        return answer;
      }
    }
    a++;
  }
};

twoSum([1, 2, 3, 4, 5], 4);
twoSum([1, 5, 4, 2, 9, 0], 4);
