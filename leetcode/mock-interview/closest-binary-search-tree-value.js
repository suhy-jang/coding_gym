/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const helper = function(root, target) {
    if (!root) return { val: -1, diff: -1 };
    
    const {val: leftVal, diff: leftDiff} = helper(root.left, target);
    const {val: rightVal, diff: rightDiff} = helper(root.right, target);
    let currVal = root.val;
    let currDiff = Math.abs(root.val - target);
    if (leftDiff !== -1 && leftDiff < currDiff) {
        currDiff = leftDiff;
        currVal = leftVal;
    }
    if (rightDiff !== -1 && rightDiff < currDiff) {
        currDiff = rightDiff;
        currVal = rightVal;
    }
    return {val: currVal, diff: currDiff};    
};

const closestValue = function(root, target) {
    return helper(root, target).val; 
};
