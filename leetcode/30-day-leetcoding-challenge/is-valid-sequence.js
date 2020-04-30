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
 * @param {number[]} arr
 * @return {boolean}
 */
const isValidSequence = function(root, arr) {
    if (arr.length === 0) return root === null;
    if (root === null || root.val !== arr[0]) return false;
    if (arr.length === 1 && (root.left == null ^ root.right === null)) return false; // to check middle
    
    return isValidSequence(root.left, arr.slice(1)) || isValidSequence(root.right, arr.slice(1))
};

