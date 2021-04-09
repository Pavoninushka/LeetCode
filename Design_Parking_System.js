/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function(big, medium, small) {
  this.parking = {
    1: big,
    2: medium,
    3: small
  };
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (this.parking[carType] > 0) {
    this.parking[carType]--;
    return true;
  } else {
    return false;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

let newParkingSystem = new ParkingSystem(1, 1, 0);
console.log(newParkingSystem.addCar(1));
console.log(newParkingSystem.addCar(2));
console.log(newParkingSystem.addCar(3));
console.log(newParkingSystem.addCar(1));
