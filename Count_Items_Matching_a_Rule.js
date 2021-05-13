/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (const [type, color, name] of items) {
    if (ruleKey === "color" && color === ruleValue) {
      count++;
    } else if (ruleKey === "type" && type === ruleValue) {
      count++;
    } else if (ruleKey === "name" && name === ruleValue) {
      count++;
    }
  }
  return count;
};

console.log(countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
  ],
  "color",
  "silver"
));

// type, color, name

