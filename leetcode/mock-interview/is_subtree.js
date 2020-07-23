/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    const q = []
    q.push(s)
    while(q.length > 0) {
        const node = q.shift()
        if (isSame(node, t)) {
            return true
        }
        if (node.left) q.push(node.left)
        if (node.right) q.push(node.right)
    }
    return false
};

const isSame = function(s, t) {
    if (s === null && t === null) return true
    if (s === null || t === null) return false
    return s.val === t.val && isSame(s.left, t.left) && isSame(s.right, t.right)
}
