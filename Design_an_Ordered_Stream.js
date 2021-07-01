/**
 * @param {number} n
 */
let OrderedStream = function(n) {
  this.stream = new Array(n);
  this.ptr = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.stream[idKey - 1] = value;
  let chunk = [];
  while (this.stream[this.ptr] !== undefined) {
    chunk.push(this.stream[this.ptr]);
    this.ptr++;
  }
  return chunk;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

const my_stream = new OrderedStream(5);
my_stream.insert(3, "ccccc");
console.log(my_stream.stream);

// [a, b, c, _, _]
//     ^ ptr
