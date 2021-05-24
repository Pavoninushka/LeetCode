/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  let result = 0;
  let item = start;

  for (let i = 0; i < n; i++) {
    result ^= item;
    item += 2;
  }

  return result;
};

console.log(xorOperation(1, 7));

