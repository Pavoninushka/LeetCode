/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  let minRequired = Math.max(...candies) - extraCandies;
  let result = [];
  for (let oneKidCandies of candies) {
    result.push(oneKidCandies >= minRequired);
  }
  return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
