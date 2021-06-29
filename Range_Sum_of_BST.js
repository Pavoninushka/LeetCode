/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
let rangeSumBST = function(root, low, high) {
  if (root === null) {
    return 0;
  }

  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }

  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }

  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};

console.log(
  rangeSumBST(
    {
      val: 10,
      left: {
        val: 5,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: {
          val: 7,
          left: null,
          right: null
        }
      },
      right: {
        val: 15,
        right: {
          val: 18,
          left: null,
          right: null
        },
        left: null
      }
    },
    7,
    15
  )
);
