/**
 * @param {number[][]} edges
 * @return {number}
 */
let findCenter = function(edges) {
  if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) {
    return edges[0][0];
  } else {
    return edges[0][1];
  }
};

console.log(findCenter([[1,2],[2,3],[4,2]]));
