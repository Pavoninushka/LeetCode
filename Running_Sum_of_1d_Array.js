/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  let result = [];
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    result.push(total);
  }

  return result;
};
