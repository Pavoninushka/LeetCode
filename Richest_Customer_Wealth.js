/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {

  let richestCustomer = 0;
  for (let client of accounts) {
    let currentCustomer = 0;
    for (let i = 0; i < client.length; i++) {
      currentCustomer += client[i];
    }
    richestCustomer = richestCustomer < currentCustomer ? currentCustomer : richestCustomer;
  }
  return richestCustomer;
};

let accounts = [[2,8,7],[7,1,3],[1,9,5]];
console.log(maximumWealth(accounts));

