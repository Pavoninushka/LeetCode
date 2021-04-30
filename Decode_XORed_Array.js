/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
  let result = [first];
  let count = 0;
  for (let item of encoded) {
    let current = item ^ result[count];
    result.push(current);
    count++;
  }
  return result;
};

console.log(decode([6,2,7,3], 4));
