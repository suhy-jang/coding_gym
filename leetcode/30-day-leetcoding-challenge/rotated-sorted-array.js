/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// small + diff -> found
// larger -> right
// small + inorder -> left
function findPivot(nums, first) {
    let s = 0, f = nums.length - 1;
    while(s <= f) {
        const mid = s + Math.floor((f - s) / 2);
        if (mid - 1 < 0 || nums[mid] > first) {
            s += 1;
        } else if (nums[mid] > nums[mid-1]) {
            f -= 1;
        } else {
            return mid;
        }
    }
    return 0;
}
// target: 1
// 3,4,5,0,1,2
// zero > target -> pivot ~ last
// zero <= target -> 0~pivot
function findTarget(nums, s, f, target) {
    while(s <= f) {
        const mid = s + Math.floor((f - s) / 2);
        if (nums[mid] < target) {
            s += 1;
        } else if (nums[mid] > target) {
            f -= 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// nums[0] > target -> pivot ~ last
// nums[0] < target -> 0 ~ pivot
const search = function(nums, target) {
    const pivot = findPivot(nums, nums[0]);
    if (pivot === 0 || nums[0] > target) return findTarget(nums, pivot, nums.length-1, target);
    return findTarget(nums, 0, pivot-1, target);
};

// [3,1], 1
// [3,1], 3
// [1], 1
