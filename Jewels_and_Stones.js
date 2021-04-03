/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
  let count = 0;
  const jewelSet = new Set(jewels);

  for (let stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb" ));