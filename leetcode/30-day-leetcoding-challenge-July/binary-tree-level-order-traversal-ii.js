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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) return []
    
    const levelOrder = []
    levelOrder.push([root.val])
    let q = [root]
    while(q.length > 0) {
        const prevQ = q
        q = []
        const vList = new Array
        while(prevQ.length > 0) {
            const node = prevQ.shift()
            if (node.left) {
                q.push(node.left)
                vList.push(node.left.val)
            }
            if (node.right) {
                q.push(node.right)
                vList.push(node.right.val)
            }
        }
        if (vList.length > 0) levelOrder.push(vList)
    }
    return levelOrder.reverse()
};
