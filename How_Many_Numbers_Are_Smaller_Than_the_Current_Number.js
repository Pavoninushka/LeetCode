/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const smallerNumbersThanCurrent = function(nums) {
//   let result = Array(nums.length).fill(0);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         result[i]++;
//       } else if (nums[i] < nums[j]) {
//         result[j]++;
//       }
//     }
//   }
//   return result;
// };
//
// console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
// [4,0,1,1,3]
  // [1, 2, 2, 3, 8]

const smallerNumbersThanCurrent = function(nums) {
  let sortedArray = [...nums].sort((a, b) => a - b);
  let result = [];
  let indexes = new Map();

  for (let i = 0; i < sortedArray.length; i ++) {
    if (!indexes.has(sortedArray[i])) {
      indexes.set(sortedArray[i], i);
    }
  }
  for (let element of nums) {
    result.push(indexes.get(element));
  }
  return result;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
