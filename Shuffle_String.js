/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
  const resultArray = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    let index = indices[i];
    resultArray[index] = char;
  }
  return resultArray.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
