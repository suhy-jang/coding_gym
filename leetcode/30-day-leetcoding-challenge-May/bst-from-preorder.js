/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {
    let n = preorder.length
    const root = new TreeNode(preorder[0])
    const deque = [root]
    for (let i = 1; i < n; i++) {
        let d = deque.length - 1
        let node = deque[d]
        const child = new TreeNode(preorder[i])
        while (deque.length > 0 && deque[d--].val < child.val) {
            node = deque.pop()
        }
        if (node.val < child.val) {
            node.right = child
        } else {
            node.left = child
        }
        deque.push(child)
    }
    return root;
};
