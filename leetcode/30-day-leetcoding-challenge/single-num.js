/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    return nums.reduce((acc, val) => acc ^ val);
};
