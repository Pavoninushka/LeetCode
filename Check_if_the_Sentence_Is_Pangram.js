/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
  const alphabet = new Set("abcd...");
  const letters = new Set(sentence);
  return letters.size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydo"));



// /**
//  * @param {string} sentence
//  * @return {boolean}
//  */
// const checkIfPangram = function(sentence) {
//   const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
//   for (let letter of sentence) {
//     if (alphabet.has(letter)) {
//       alphabet.delete(letter);
//     }
//   }
//   return alphabet.size === 0;
// };
//
// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydo"));
