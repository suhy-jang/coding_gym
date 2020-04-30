/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let s = 0, e = nums.length-1;
    while(s <= e) {
        const m = s + Math.floor((e - s) / 2);
        if (nums[m] === target) return m;
        if (nums[m] >= nums[s]) {
            if (nums[s] <= target && target < nums[m]) e = m - 1;
            else s = m + 1;
        } else {
            if (nums[m] < target && target <= nums[e]) s = m + 1;
            else e = m - 1;
        }
    }
    return -1;
};

