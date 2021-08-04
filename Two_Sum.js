/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  let collection = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (collection.has(target - nums[i])) {
      return [collection.get(target - nums[i]), i];
    } else {
      collection.set(nums[i], i);
    }
  }
};

console.log(twoSum([2,7,11,15], 9));
