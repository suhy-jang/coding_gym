let $max = null

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
const maxPathSum = function(root) {
    $max = root.val
    helper(root)
    return $max
};

const helper = function(root) {
    if (root === null) return 0
    const val = root.val
    const l = helper(root.left)
    const r = helper(root.right)
    const single = Math.max(l+val, r+val, val)
    const top = Math.max(single, l+r+val)
    $max = Math.max($max, top)
    return single
}
