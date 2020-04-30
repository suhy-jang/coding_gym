/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    if (nums.length == 0) return;

    let slow = 0;
    let i = 0;
    while(i < nums.length) {
        if (slow < i && nums[i] != 0) {
            nums[slow] = nums.splice(i, 1, nums[slow])[0];
        }
        if (nums[slow] != 0) {
            slow += 1;
        }
        i += 1;
    }
};
