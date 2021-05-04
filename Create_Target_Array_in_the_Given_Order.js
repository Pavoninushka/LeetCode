/**
 * @param {number[]} nums
 * @param {number[]} indexes
 * @return {number[]}
 */
const createTargetArray = function(nums, indexes) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let index = indexes[i];
    target.splice(index, 0, num);
  }
  return target;
};

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]));