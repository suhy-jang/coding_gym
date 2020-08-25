const addLeaves = function(root) {
    if (!root) return 0;
    let left = 0;
    if (root.left && !root.left.left && !root.left.right) left = root.left.val;
    return left + addLeaves(root.left) + addLeaves(root.right);
}
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    return addLeaves(root);
};
