/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// recursive
// const isSameTree = (p, q) => {
//     if (p === null && q === null) return true;
//     if ((p === null && q !== null) || (p !== null && q === null) || (p.val != q.val)) return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// iterative
const isSameTree = (p, q) => {
    const queue = [[p, q]];
    while (queue.length > 0) {
        const [first, second] = queue.shift();
        if (first === null && second === null) continue;
        if ((first === null && second !== null) || (first !== null && second === null) || (first.val !== second.val)) return false;
        queue.unshift([first.left, second.left]);
        queue.unshift([first.right, second.right]);
    }
    return true;
};
