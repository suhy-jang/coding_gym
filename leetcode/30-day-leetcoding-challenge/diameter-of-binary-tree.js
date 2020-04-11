/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const helper = function(root) {
    if (root == null) return { maxHeight: -1, maxDiameter: 0 };
    const left = helper(root.left);
    const right = helper(root.right);
    const currDiameter = left.maxHeight + right.maxHeight + 2;
    return {
        maxHeight: Math.max(left.maxHeight, right.maxHeight) + 1,
        maxDiameter: Math.max(left.maxDiameter, right.maxDiameter, currDiameter)
    }
}

const diameterOfBinaryTree = function(root) {
    if (root == null) return 0;
    return helper(root).maxDiameter;
};
