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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const getDepth = function(root, val) {
    if (root === null || root.val === val) return { parent: null, depth: 0 };
    
    const st = [[root, 0]];
    while(st.length > 0) {
        const [parent, depth] = st.pop();
        if (parent.left) {
            if (parent.left.val === val) {
                return { parent, depth: depth + 1 };
            }
            st.push([parent.left, depth + 1]);
        }
        if (parent.right) {
            if (parent.right.val === val) {
                return { parent, depth: depth + 1 }; 
            }
            st.push([parent.right, depth + 1]);
        }
    }
    return { parent: null, depth: 0 }
}

const isCousins = function(root, x, y) {
    const { parent: xParent, depth: xDepth } = getDepth(root, x);
    const { parent: yParent, depth: yDepth } = getDepth(root, y);
    return xParent !== yParent && xDepth === yDepth;
};
