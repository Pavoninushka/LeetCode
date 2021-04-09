/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  let result = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        result[i]++;
      } else if (nums[i] < nums[j]) {
        result[j]++;
      }
    }
  }
  return result;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));