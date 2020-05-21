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
 * @param {Array(number)} nth
 */
const inorder = (root, nth) => {
    if (root === null) return;
    inorder(root.left, nth);
    nth.push(root.val);
    inorder(root.right, nth);
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
    const nums = [];
    inorder(root, nums);
    return nums[k-1];
};
