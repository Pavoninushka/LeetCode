/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  return address.replace(/\./g, "[.]")
};

console.log(defangIPaddr("1.1.1.1"));
