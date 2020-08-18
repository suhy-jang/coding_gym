const backtrack = (n, nums, output, first) => {
    if (first === n) {
        output.push(nums);
    }
    for (let i = first; i < n; i++) {
        [nums[i], nums[first]] = [nums[first], nums[i]];
        backtrack(n, nums.map(e=>e), output, first + 1);
        [nums[i], nums[first]] = [nums[first], nums[i]];
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const output = [];
    const n = nums.length;
    backtrack(n, nums.map(e=>e), output, 0);
    return output;
};
