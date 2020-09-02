/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let result;
  for (const ind in nums) {
    if (target < nums[0]) {
      result = 0;
    } else if (nums[ind] === target) {
      result = ind;
    } else if (nums[ind - 1] < target && target < nums[ind]) {
      result = ind;
    } else if (target > nums[nums.length - 1]) {
      result = nums.length;
    }
  }
  //   console.log(result);
  return result;
};

searchInsert([1, 3, 5, 6], 2);

// [[1,1,1,1],
//  [1,1,0,1],
//  [1,1,0,1],
//  [1,0,1,1]]
