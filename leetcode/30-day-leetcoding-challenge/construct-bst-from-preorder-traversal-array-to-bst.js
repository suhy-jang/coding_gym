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
    const inorder = preorder.slice().sort((a, b) => a - b);
    return build_tree(0, 0, preorder.length - 1, preorder, inorder);
};

function build_tree(pre_start, in_start, in_end, preorder, inorder) {
    if(pre_start > preorder.length || in_start > in_end) return null;
    const root = new TreeNode(preorder[pre_start]);
    const rootIdx = inorder.indexOf(root.val);
    root.left = build_tree(pre_start+1, in_start, rootIdx-1, preorder, inorder);
    root.right = build_tree(pre_start+rootIdx-in_start+1, rootIdx+1, in_end, preorder, inorder);
    return root;
};
