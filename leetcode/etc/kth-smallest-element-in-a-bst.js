/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const inorder = (root, nth) => {
    if (root === null) return nth;
    inorder(root.left, nth);
    nth.push(root.val);
    inorder(root.right, nth);
    return nth;
}

const kthSmallest = (root, k) => {
    const nums = inorder(root, []);
    return nums[k-1];
};
