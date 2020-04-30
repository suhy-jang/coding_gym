/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    if (nums.length === 0) return true;
    
    let curr = nums[0];
    for(let i = 0; i < nums.length; i++) {
        curr = Math.max(curr, nums[i]);
        if (curr === 0 && i !== nums.length - 1) return false;
        curr -= 1;
    }
    return true;
};
