/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  let countL = 0;
  let countR = 0;
  let result = 0;

  for (let item of s) {
    if (item === "R") {
      countR++;
    }
    if (item === "L") {
      countL++;
    }
    if (countR === countL) {
      result++;
    }
  }
  return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
