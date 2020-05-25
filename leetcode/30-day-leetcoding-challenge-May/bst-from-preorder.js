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
    let n = preorder.length;
    if (n === 0) return null;
    
    const root = new TreeNode(preorder[0]);
    const queue = [];
    queue.push(root);
    for (let i = 1; i < n; i++) {
        let d = queue.length-1;
        let node = queue[d];
        const child = new TreeNode(preorder[i]);
        while(queue.length > 0 && queue[d--].val < child.val)
            node = queue.pop();
        if (node.val < child.val) node.right = child;
        else node.left = child;
        queue.push(child);
    }
    return root;
};
