/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let major;
    let cnt = 0;
    for(const n of nums) {
        if (cnt === 0) {
            major = n;
        }
        cnt += major === n ? 1 : -1;
    }
    return major;
};

// [1,1,2,2,2,3,3,3,3,3,3,3,3,3] -> 3
