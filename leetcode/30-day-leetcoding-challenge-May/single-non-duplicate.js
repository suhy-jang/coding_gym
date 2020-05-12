/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
    if (nums.length === 0) return null;
    
    const n = nums.length;
    let s = 0, e = n-1;
    while(s < e) {
        let m = s + Math.floor((e - s)/2);
        if (m % 2 === 1) m--;
        if (nums[m] === nums[m+1]) {
            s = m + 2;
        } else {
            e = m;
        }
    }
    return nums[s];
};

// [1,3,3,4,4,8,8]
// [1,1,3,3,4,4,8]
// [1,1,3,4,4,8,8]
