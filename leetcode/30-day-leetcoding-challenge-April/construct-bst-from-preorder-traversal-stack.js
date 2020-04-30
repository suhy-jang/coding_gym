/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {
    const n = preorder.length;
    if (n === 0) return null;
    
    const root = new TreeNode(preorder[0]);
    const stack = [];
    stack.push(root);
    
    for(let i = 1; i < n; i++) {
        let last = stack.length - 1;
        let node = stack[last];
        const child = new TreeNode(preorder[i]);
        while(stack.length > 0 && stack[last].val < child.val) {
            node = stack.pop();
            last--;
        }
        if (node.val < child.val) node.right = child;
        else node.left = child;
        stack.push(child);
    }
    return root;
};
