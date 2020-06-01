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
 * @return {TreeNode}
 */
const invertTree = function(root) {
    if (root === null) return null
    
    const q = []
    q.push(root)
    while (q.length > 0) {
        const node = q.shift()
        const temp = node.left
        node.left = node.right
        node.right = temp
        if (node.left) q.push(node.left)
        if (node.right) q.push(node.right)
    }
    return root
};
