/**
 * @param {number[]} nums
 * @return {number}
 */

function crossSum(nums, left, right, pivot) {
    if (left == right) return nums[left];

    let leftSubSum = nums[pivot];
    let currSum = 0;
    for(let i = pivot; i >= left; i--) {
        currSum += nums[i];
        leftSubSum = Math.max(leftSubSum, currSum);
    }
    let rightSubSum = nums[pivot + 1];
    currSum = 0;
    for(let i = pivot + 1; i <= right; i++) {
        currSum += nums[i];
        rightSubSum = Math.max(rightSubSum, currSum);
    }
    return leftSubSum + rightSubSum;
};

function merge(nums, left, right) {
    if (left == right) return nums[left];

    const pivot = Math.floor((left + right) / 2);
    const leftSum = merge(nums, left, pivot);
    const rightSum = merge(nums, pivot+1, right);
    const crossSumVal = crossSum(nums, left, right, pivot);
    return Math.max(leftSum, rightSum, crossSumVal);
};

const maxSubArray = function(nums) {
    if (nums.length == 0) return 0;
    
    return merge(nums, 0, nums.length - 1);
};
