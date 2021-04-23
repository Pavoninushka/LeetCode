/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    let times = nums[i];
    let element = nums[i + 1];
    for (let j = 0; j < times; j++) {
      result.push(element);
    }
  }
  return result;
};

console.log(decompressRLElist([1, 2, 3, 4]));
